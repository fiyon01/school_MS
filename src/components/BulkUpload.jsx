import React, { useState, useRef } from 'react';
import Papa from 'papaparse';

const BulkUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [previewData, setPreviewData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state for bulk upload
  const fileInputRef = useRef(null); // Ref for file input

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setLoading(true); // Start loading

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => {
        // Normalize field names
        return header
          .toLowerCase()
          .replace(/ /g, '')
          .replace(/[^a-z0-9]/g, '');
      },
      complete: (results) => {
        console.log("Parsed CSV Data:", results.data); // Debugging

        const data = results.data;
        const validationErrors = [];

        data.forEach((row, index) => {
          console.log(`Row ${index + 1}:`, row); // Debugging each row

          if (
            !row["admissionnumber"] ||
            !row["firstname"] ||
            !row["lastname"] ||
            !row["parentname"] ||
            !row["parentcontact"] ||
            (row["feebalance"] === undefined || row["feebalance"] === null)
          ) {
            validationErrors.push({
              ...row,
              error: "Missing required fields",
              row: index + 1,
            });
          }
        });

        if (validationErrors.length > 0) {
          setErrors(validationErrors);
        } else {
          setErrors([]);
        }
        setPreviewData(data);
        setLoading(false); // Stop loading
      },
      error: (error) => {
        console.error("CSV Parsing Error:", error);
        setLoading(false); // Stop loading
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.length === 0) {
      console.log("Uploading Data:", previewData); // Debugging before sending
      onUpload(previewData); // Pass data to parent component
      setPreviewData([]);
      setFile(null);
      fileInputRef.current.value = ''; // Clear file input
    }
  };

  const handleClearFile = () => {
    setFile(null);
    setPreviewData([]);
    setErrors([]);
    fileInputRef.current.value = ''; // Clear file input
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Bulk Upload Students</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          accept=".csv"
          required
          ref={fileInputRef} // Attach ref to file input
        />
        {loading && <div className="text-center py-2">Processing file...</div>}
        {previewData.length > 0 && (
          <div className="overflow-x-auto"> {/* Make table scrollable on small screens */}
            <h3 className="text-lg font-semibold mb-2">Preview Data</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Admission No.</th>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Parent/Guardian</th>
                  <th className="p-2 border">Contact</th>
                  <th className="p-2 border">Fee Balance</th>
                </tr>
              </thead>
              <tbody>
                {previewData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="p-2 border">{row.admissionnumber}</td>
                    <td className="p-2 border">
                      {row.firstname} {row.lastname}
                    </td>
                    <td className="p-2 border">{row.parentname}</td>
                    <td className="p-2 border">{row.parentcontact}</td>
                    <td className="p-2 border">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          row.feebalance === 0
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        ${row.feebalance}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {errors.length > 0 && (
          <div className="text-red-500">
            <h3 className="text-lg font-semibold mb-2">Validation Errors</h3>
            <ul>
              {errors.map((error, index) => (
                <li key={index}>
                  Row {error.row}: {error.error}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <button
            type="button"
            onClick={handleClearFile}
            className="w-full md:w-auto bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
          >
            Clear File
          </button>
          <button
            type="submit"
            className="w-full md:w-auto bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
            disabled={errors.length > 0 || previewData.length === 0 || loading}
          >
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BulkUpload;