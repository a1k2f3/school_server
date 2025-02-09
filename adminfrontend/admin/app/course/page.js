"use client"
import React, { useState, useEffect } from "react";
import Sidebar from "../adminfinal/AdminComponents";

const Page = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [dialog, setDialog] = useState({ isOpen: false, type: "add", course: { name: "", code: "" } });

  useEffect(() => {
    setCourses([
      { id: 1, name: "Computer Science", code: "CS101" },
      { id: 2, name: "Physics", code: "PHY102" },
    ]);
  }, []);

  const handleSaveCourse = () => {
    if (dialog.type === "add") {
      setCourses([...courses, { id: courses.length + 1, ...dialog.course }]);
    } else {
      setCourses(
        courses.map((course) => (course.id === dialog.course.id ? dialog.course : course))
      );
    }
    setDialog({ isOpen: false, type: "add", course: { name: "", code: "" } });
  };

  const handleDelete = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Course Management</h1>
        <div className="flex justify-between mb-4">
          <input 
            className="border p-2 rounded" 
            placeholder="Search Course..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded" 
            onClick={() => setDialog({ isOpen: true, type: "add", course: { name: "", code: "" } })}
          >
            Add Course
          </button>
        </div>

        <div className="bg-white shadow rounded p-4">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">ID</th>
                <th className="border p-2">Course Name</th>
                <th className="border p-2">Course Code</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses
                .filter((course) => course.name.toLowerCase().includes(search.toLowerCase()))
                .map((course) => (
                  <tr key={course.id} className="border">
                    <td className="border p-2">{course.id}</td>
                    <td className="border p-2">{course.name}</td>
                    <td className="border p-2">{course.code}</td>
                    <td className="border p-2">
                      <button 
                        className="bg-yellow-500 text-white px-3 py-1 rounded mr-2" 
                        onClick={() => setDialog({ isOpen: true, type: "edit", course })}
                      >
                        Edit
                      </button>
                      <button 
                        className="bg-red-500 text-white px-3 py-1 rounded" 
                        onClick={() => handleDelete(course.id)}
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
              <h2 className="text-lg font-bold mb-2">{dialog.type === "add" ? "Add New Course" : "Edit Course"}</h2>
              <input 
                className="border p-2 w-full rounded mb-2" 
                placeholder="Course Name" 
                value={dialog.course.name} 
                onChange={(e) => setDialog({ ...dialog, course: { ...dialog.course, name: e.target.value } })} 
              />
              <input 
                className="border p-2 w-full rounded mb-2" 
                placeholder="Course Code" 
                value={dialog.course.code} 
                onChange={(e) => setDialog({ ...dialog, course: { ...dialog.course, code: e.target.value } })} 
              />
              <div className="flex justify-end space-x-2">
                <button 
                  className="bg-gray-500 text-white px-4 py-2 rounded" 
                  onClick={() => setDialog({ isOpen: false, type: "add", course: { name: "", code: "" } })}
                >
                  Cancel
                </button>
                <button 
                  className="bg-green-500 text-white px-4 py-2 rounded" 
                  onClick={handleSaveCourse}
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
