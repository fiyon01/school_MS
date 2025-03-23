import React from 'react';
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaDollarSign,
  FaChartLine,
  FaClock,
  FaMoneyCheckAlt,
} from 'react-icons/fa';

const QuickOverview = () => {
  const stats = [
    {
      title: 'Total Students',
      value: '1,200',
      color: 'bg-blue-500',
      icon: <FaUserGraduate className="text-3xl" />,
      trend: '+5%',
      trendColor: 'text-green-300',
      description: 'Compared to last month',
    },
    {
      title: 'Active Teachers',
      value: '45',
      color: 'bg-green-500',
      icon: <FaChalkboardTeacher className="text-3xl" />,
      trend: '-2%',
      trendColor: 'text-red-300',
      description: 'Compared to last quarter',
    },
    {
      title: 'Fee Balance Summary',
      value: '$12,000',
      color: 'bg-yellow-500',
      icon: <FaDollarSign className="text-3xl" />,
      trend: '+10%',
      trendColor: 'text-green-300',
      description: 'Compared to last year',
    },
    {
      title: 'Academic Performance',
      value: '85%',
      color: 'bg-purple-500',
      icon: <FaChartLine className="text-3xl" />,
      progress: 85, // Progress bar value
      description: 'Average score across all classes',
    },
  ];

  const recentPayments = [
    {
      id: 1,
      student: 'John Doe',
      amount: '$200',
      date: '2023-10-01',
      status: 'Completed',
    },
    {
      id: 2,
      student: 'Jane Smith',
      amount: '$150',
      date: '2023-10-02',
      status: 'Pending',
    },
    {
      id: 3,
      student: 'Alice Johnson',
      amount: '$300',
      date: '2023-10-03',
      status: 'Completed',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      activity: 'New student registered',
      date: '2023-10-01',
      icon: <FaUserGraduate className="text-blue-500" />,
    },
    {
      id: 2,
      activity: 'Exam schedule updated',
      date: '2023-10-02',
      icon: <FaClock className="text-green-500" />,
    },
    {
      id: 3,
      activity: 'Fee payment received',
      date: '2023-10-03',
      icon: <FaMoneyCheckAlt className="text-yellow-500" />,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg text-white ${stat.color} hover:shadow-lg transition-shadow duration-300`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{stat.title}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <div className="text-white">{stat.icon}</div>
            </div>
            {stat.trend && (
              <div className="mt-2">
                <span className={`text-sm ${stat.trendColor}`}>
                  {stat.trend} {stat.description}
                </span>
              </div>
            )}
            {stat.progress && (
              <div className="mt-4">
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                  <div
                    className="bg-white h-2 rounded-full"
                    style={{ width: `${stat.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-2">{stat.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Recent Payments Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Recent Payments</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Student</th>
                <th className="p-2 text-left">Amount</th>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-100">
                  <td className="p-2 border">{payment.student}</td>
                  <td className="p-2 border">{payment.amount}</td>
                  <td className="p-2 border">{payment.date}</td>
                  <td className="p-2 border">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        payment.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
        <ul className="space-y-4">
          {recentActivities.map((activity) => (
            <li key={activity.id} className="flex items-center space-x-4">
              <div className="text-2xl">{activity.icon}</div>
              <div>
                <p className="text-lg font-semibold">{activity.activity}</p>
                <p className="text-sm text-gray-500">{activity.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuickOverview;