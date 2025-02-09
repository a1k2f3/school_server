"use client"
import React, { useState, useEffect } from "react";
import Sidebar from "../adminfinal/AdminComponents";

const Page = () => {
  const [teachers, setTeachers] = useState([]);
  const [search, setSearch] = useState("");
  const [dialog, setDialog] = useState({ isOpen: false, type: "add", teacher: { name: "", subject: "" } });

  useEffect(() => {
    setTeachers([
      { id: 1, name: "John Doe", subject: "Mathematics" },
      { id: 2, name: "Jane Smith", subject: "Physics" },
    ]);
  }, []);

  const handleSaveTeacher = () => {
    if (dialog.type === "add") {
      setTeachers([...teachers, { id: teachers.length + 1, ...dialog.teacher }]);
    } else {
      setTeachers(
        teachers.map((teacher) => (teacher.id === dialog.teacher.id ? dialog.teacher : teacher))
      );
    }
    setDialog({ isOpen: false, type: "add", teacher: { name: "", subject: "" } });
  };

  const handleDelete = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Teacher Management</h1>
        <div className="flex justify-between mb-4">
          <input 
            className="border p-2 rounded" 
            placeholder="Search Teacher..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded" 
            onClick={() => setDialog({ isOpen: true, type: "add", teacher: { name: "", subject: "" } })}
          >
            Add Teacher
          </button>
        </div>

        <div className="bg-white shadow rounded p-4">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">ID</th>
                <th className="border p-2">Teacher Name</th>
                <th className="border p-2">Subject</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers
                .filter((teacher) => teacher.name.toLowerCase().includes(search.toLowerCase()))
                .map((teacher) => (
                  <tr key={teacher.id} className="border">
                    <td className="border p-2">{teacher.id}</td>
                    <td className="border p-2">{teacher.name}</td>
                    <td className="border p-2">{teacher.subject}</td>
                    <td className="border p-2">
                      <button 
                        className="bg-yellow-500 text-white px-3 py-1 rounded mr-2" 
                        onClick={() => setDialog({ isOpen: true, type: "edit", teacher })}
                      >
                        Edit
                      </button>
                      <button 
                        className="bg-red-500 text-white px-3 py-1 rounded" 
                        onClick={() => handleDelete(teacher.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {dialog.isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-lg font-bold mb-2">{dialog.type === "add" ? "Add New Teacher" : "Edit Teacher"}</h2>
              <input 
                className="border p-2 w-full rounded mb-2" 
                placeholder="Teacher Name" 
                value={dialog.teacher.name} 
                onChange={(e) => setDialog({ ...dialog, teacher: { ...dialog.teacher, name: e.target.value } })} 
              />
              <input 
                className="border p-2 w-full rounded mb-2" 
                placeholder="Subject" 
                value={dialog.teacher.subject} 
                onChange={(e) => setDialog({ ...dialog, teacher: { ...dialog.teacher, subject: e.target.value } })} 
              />
              <div className="flex justify-end space-x-2">
                <button 
                  className="bg-gray-500 text-white px-4 py-2 rounded" 
                  onClick={() => setDialog({ isOpen: false, type: "add", teacher: { name: "", subject: "" } })}
                >
                  Cancel
                </button>
                <button 
                  className="bg-green-500 text-white px-4 py-2 rounded" 
                  onClick={handleSaveTeacher}
                >
                  {dialog.type === "add" ? "Add" : "Update"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;