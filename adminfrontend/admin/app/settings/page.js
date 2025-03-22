"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";

const Page = () => {
  const { theme, setTheme } = useTheme();
  const [name, setName] = useState("Kamran");
  const [email, setEmail] = useState("kamran@example.com");
  const [notifications, setNotifications] = useState(true);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      console.log("User logged out");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-lg shadow-lg p-6 bg-white dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Settings</h2>
        <div className="space-y-6">
          
          {/* Theme Toggle */}
          <div className="flex items-center justify-between">
            <label className="text-gray-800 dark:text-gray-200">Dark Mode</label>
            <input
              type="checkbox"
              className="w-5 h-5"
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          </div>

          {/* Account Settings */}
          <div>
            <label className="block mb-1 text-gray-800 dark:text-gray-200">Name</label>
            <input 
              className="w-full border p-2 rounded dark:bg-gray-700 dark:text-white"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-800 dark:text-gray-200">Email</label>
            <input 
              className="w-full border p-2 rounded dark:bg-gray-700 dark:text-white" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          {/* Notification Preferences */}
          <div className="flex items-center justify-between">
            <label className="text-gray-800 dark:text-gray-200">Enable Notifications</label>
            <input
              type="checkbox"
              className="w-5 h-5"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          </div>

          {/* Logout Button with Confirmation */}
          <button 
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded transition-all"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>
      </div>
    </div>
  );
};

export default Page;
