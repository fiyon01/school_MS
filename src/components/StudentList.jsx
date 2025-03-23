import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'; // Icons for actions

const StudentList = ({ uploadedStudents = [] }) => {
  return (
    <div className="bg-white p-8 md:p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Student List</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 sm:pl-2 pr-2">
              <th className="p-2 md:p-3 text-left">Admission No.</th>
              <th className="p-2 md:p-3 text-left">Name</th>
              <th className="p-2 md:p-3 text-left">Parent/Guardian</th>
              <th className="p-2 md:p-3 text-left">Contact</th>
              <th className="p-2 md:p-3 text-left">Fee Balance</th>
              <th className="p-2 md:p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {uploadedStudents.map((student, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-2 md:p-3 border">{student.admissionNumber}</td>
                <td className="p-2 md:p-3 border">
                  {student.firstName} {student.lastName}
                </td>
                <td className="p-2 md:p-3 border">{student.parentName}</td>
                <td className="p-2 md:p-3 border">{student.parentContact}</td>
                <td className="p-2 md:p-3 border">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      student.feeBalance === 0
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    ${student.feeBalance}
                  </span>
                </td>
                <td className="p-2 md:p-3 border">
                  <div className="flex space-x-2 md:space-x-3">
                    <Link
                      to={`/students/${student.id}`}
                      className="text-blue-500 hover:text-blue-700"
                      title="View"
                    >
                      <FaEye className="inline-block" />
                    </Link>
                    <Link
                      to={`/students/edit/${student.id}`} // Add an edit route if needed
                      className="text-yellow-500 hover:text-yellow-700"
                      title="Edit"
                    >
                      <FaEdit className="inline-block" />
                    </Link>
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete"
                    >
                      <FaTrash className="inline-block" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;