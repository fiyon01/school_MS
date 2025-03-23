import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import StudentList from './StudentList';
import BulkUpload from './BulkUpload';
import AddStudent from './AddStudent';
import StudentProfile from './StudentProfile';

const Students = ({ schoolId }) => {
  const { studentId } = useParams(); // Get studentId from URL if viewing a profile
  const [activeSection, setActiveSection] = useState(null);
  const [uploadedStudents, setUploadedStudents] = useState([]); // Store uploaded students

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // Handle new students uploaded via BulkUpload
  const handleUpload = (newStudents) => {
    console.log("Newly Uploaded Students:", newStudents); // Debugging
    setUploadedStudents((prev) => [...prev, ...newStudents]);
  };

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      <h1 className="text-xl md:text-2xl font-bold">Student Management</h1>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2 md:gap-4">
        <button
          onClick={() => toggleSection('add')}
          className={`px-3 py-1 md:px-4 md:py-2 rounded-md ${
            activeSection === 'add' ? 'bg-blue-600' : 'bg-blue-500'
          } text-white hover:bg-blue-600`}
        >
          {activeSection === 'add' ? 'Hide Add Student' : 'Add Student'}
        </button>
        <button
          onClick={() => toggleSection('bulk')}
          className={`px-3 py-1 md:px-4 md:py-2 rounded-md ${
            activeSection === 'bulk' ? 'bg-green-600' : 'bg-green-500'
          } text-white hover:bg-green-600`}
        >
          {activeSection === 'bulk' ? 'Hide Bulk Upload' : 'Bulk Upload'}
        </button>
      </div>

      {/* Add Student Form */}
      {activeSection === 'add' && (
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <AddStudent schoolId={schoolId} />
        </div>
      )}

      {/* Bulk Upload Form */}
      {activeSection === 'bulk' && (
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <BulkUpload schoolId={schoolId} onUpload={handleUpload} />
        </div>
      )}

      {/* Student List */}
      {!studentId && (
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <StudentList uploadedStudents={uploadedStudents} />
        </div>
      )}

      {/* Student Profile */}
      {studentId && (
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <StudentProfile studentId={studentId} />
        </div>
      )}
    </div>
  );
};

export default Students;