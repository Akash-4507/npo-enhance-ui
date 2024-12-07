import React from "react";
import { FaHome, FaUsers, FaCogs, FaBell, FaClipboardList, FaBox } from "react-icons/fa"; // import icons

const Adminnav = () => {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-64 bg-gradient-to-r from-slate-700 via-sky-700 to-blue-900 text-white p-4">
        <div className="text-2xl font-semibold mb-8">Admin Dashboard</div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <FaHome size={20} />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaUsers size={20} />
            <span>Users</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaBox size={20} />
            <span>Services</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaClipboardList size={20} />
            <span>Donations</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaClipboardList size={20} />
            <span>Events</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaCogs size={20} />
            <span>Settings</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaBell size={20} />
            <span>Notifications</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50 overflow-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold mb-4">Data Overview</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Active Users Card */}
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700">Active Users</h2>
              <div className="mt-4">
                <p className="text-2xl font-bold text-blue-700">1,250</p>
                <p className="text-gray-500">Users currently active on the platform</p>
              </div>
            </div>

            {/* Recent Donations Card */}
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700">Recent Donations</h2>
              <div className="mt-4">
                <p className="text-2xl font-bold text-green-700">$4,200</p>
                <p className="text-gray-500">Total donations made this week</p>
              </div>
            </div>

            {/* Upcoming Events Card */}
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700">Upcoming Events</h2>
              <div className="mt-4">
                <p className="text-2xl font-bold text-yellow-700">8 Events</p>
                <p className="text-gray-500">Events scheduled for the next month</p>
              </div>
            </div>

            {/* Donations Progress */}
            <div className="col-span-2 bg-teal-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700">Donation Goal Progress</h2>
              <div className="mt-4">
                <p className="text-2xl font-bold text-teal-700">$7,000 of $10,000</p>
                <div className="w-full bg-gray-200 rounded-full mt-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>

            {/* Service Management Card */}
            <div className="col-span-2 bg-purple-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700">Service Management</h2>
              <div className="mt-4">
                <p className="text-2xl font-bold text-purple-700">15 Services</p>
                <p className="text-gray-500">Total number of services managed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminnav;
