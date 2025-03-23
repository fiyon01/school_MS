import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { FaCheck, FaUser, FaChalkboardTeacher, FaChartLine, FaStar } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16 px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to School Management System
          </h1>
          <p className="text-lg mb-8">
            Streamline your school operations with our easy-to-use management system.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/create-account"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition duration-300"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaUser className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Easy Registration</h3>
              <p className="text-gray-700">
                Quickly set up your school profile and start using the system.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaChalkboardTeacher className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Manage Classes</h3>
              <p className="text-gray-700">
                Organize classes, teachers, and students effortlessly.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaChartLine className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Track Progress</h3>
              <p className="text-gray-700">
                Monitor student performance and generate reports.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg text-sm">
                Popular
              </div>
              <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
              <p className="text-gray-700 mb-4">Perfect for small schools</p>
              <p className="text-3xl font-bold mb-4">$29<span className="text-lg text-gray-500">/month</span></p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Up to 100 students</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Basic reporting</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Email support</span>
                </li>
              </ul>
              <Link
                to="/create-account"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300 text-center block"
              >
                Get Started
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
              <p className="text-gray-700 mb-4">Ideal for medium-sized schools</p>
              <p className="text-3xl font-bold mb-4">$59<span className="text-lg text-gray-500">/month</span></p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Up to 500 students</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Advanced reporting</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Link
                to="/create-account"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300 text-center block"
              >
                Get Started
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Enterprise Plan</h3>
              <p className="text-gray-700 mb-4">For large institutions</p>
              <p className="text-3xl font-bold mb-4">$99<span className="text-lg text-gray-500">/month</span></p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Unlimited students</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Custom reporting</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Dedicated support</span>
                </li>
              </ul>
              <Link
                to="/create-account"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300 text-center block"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaStar className="text-yellow-500 mr-2" />
                <FaStar className="text-yellow-500 mr-2" />
                <FaStar className="text-yellow-500 mr-2" />
                <FaStar className="text-yellow-500 mr-2" />
                <FaStar className="text-yellow-500 mr-2" />
              </div>
              <p className="text-gray-700 mb-4">
                "This system has transformed how we manage our school. Highly recommended!"
              </p>
              <p className="font-semibold">- John Doe, Greenwood High</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaStar className="text-yellow-500 mr-2" />
                <FaStar className="text-yellow-500 mr-2" />
                <FaStar className="text-yellow-500 mr-2" />
                <FaStar className="text-yellow-500 mr-2" />
                <FaStar className="text-yellow-500 mr-2" />
              </div>
              <p className="text-gray-700 mb-4">
                "The reporting features are fantastic. It saves us so much time!"
              </p>
              <p className="font-semibold">- Jane Smith, Springfield Academy</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaStar className="text-yellow-500 mr-2" />
                <FaStar className="text-yellow-500 mr-2" />
                <FaStar className="text-yellow-500 mr-2" />
                <FaStar className="text-yellow-500 mr-2" />
                <FaStar className="text-yellow-500 mr-2" />
              </div>
              <p className="text-gray-700 mb-4">
                "Excellent support and easy to use. Our teachers love it!"
              </p>
              <p className="font-semibold">- Michael Brown, Riverside School</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2023 School Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;