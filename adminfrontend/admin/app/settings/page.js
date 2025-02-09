"use client"
import React, { useState } from "react";
import { useTheme } from "next-themes";

const Page = () => {
  const { theme, setTheme } = useTheme();
  const [name, setName] = useState("Kamran");
  const [email, setEmail] = useState("kamran@example.com");
  const [notifications, setNotifications] = useState(true);
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="w-full max-w-lg shadow-xl p-6 bg-white rounded-lg">
        <h2 className="text-xl font-bold mb-4">Settings</h2>
        <div className="space-y-6">
          {/* Theme Toggle */}
          <div className="flex items-center justify-between">
            <label>Dark Mode</label>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          </div>

          {/* Account Settings */}
          <div>
            <label>Name</label>
            <input 
              className="w-full border p-2 rounded"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>

          <div>
            <label>Email</label>
            <input 
              className="w-full border p-2 rounded" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          {/* Notification Preferences */}
          <div className="flex items-center justify-between">
            <label>Enable Notifications</label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          </div>

          {/* Logout Button */}
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
