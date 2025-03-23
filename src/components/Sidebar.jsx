import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaCog,
  FaCalendarAlt,
  FaUser,
  FaBook,
  FaChartLine,
} from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`bg-gray-800 text-white w-64 min-h-screen fixed z-50 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      } transition-transform duration-300`}
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      </div>
      <ul className="space-y-2 p-4">
        <li>
          <Link
            to="/admin"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
            onClick={toggleSidebar}
          >
            <FaHome className="mr-2" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/admin/students"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
            onClick={toggleSidebar}
          >
            <FaUser className="mr-2" />
            Students
          </Link>
        </li>
        <li>
          <Link
            to="/academics"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
            onClick={toggleSidebar}
          >
            <FaBook className="mr-2" />
            Academics
          </Link>
        </li>
        <li>
          <Link
            to="/reports"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
            onClick={toggleSidebar}
          >
            <FaChartLine className="mr-2" />
            Reports
          </Link>
        </li>
        <li>
          <Link
            to="/school-settings"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
            onClick={toggleSidebar}
          >
            <FaCog className="mr-2" />
            School Settings
          </Link>
        </li>
        <li>
          <Link
            to="/term-structure"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
            onClick={toggleSidebar}
          >
            <FaCalendarAlt className="mr-2" />
            Term Structure
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;