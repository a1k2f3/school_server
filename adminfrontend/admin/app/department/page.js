"use client"
import React, { useState, useEffect } from "react";
import Sidebar from "../adminfinal/AdminComponents";

const Page = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({ name: "", code: "" });
  const [editCourse, setEditCourse] = useState(null);

  useEffect(() => {
    setCourses([
      { id: 1, name: "Computer Science", code: "CS101" },
      { id: 2, name: "Physics", code: "PHY102" },
    ]);
  }, []);

  const handleAddCourse = () => {
    setCourses([...courses, { id: courses.length + 1, ...newCourse }]);
    setNewCourse({ name: "", code: "" });
    setIsDialogOpen(false);
  };

  const handleDelete = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const handleEdit = (course) => {
    setEditCourse(course);
    setIsEditDialogOpen(true);
  };

  const handleUpdateCourse = () => {
    setCourses(
      courses.map((course) =>
        course.id === editCourse.id ? editCourse : course
      )
    );
    setEditCourse(null);
    setIsEditDialogOpen(false);
  };

  return (
    <div className="flex">
      <Sidebar/>
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
            onClick={() => setIsDialogOpen(true)}
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
                        onClick={() => handleEdit(course)}
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

        {isDialogOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-lg font-bold mb-2">Add New Course</h2>
              <input 
                className="border p-2 w-full rounded mb-2" 
                placeholder="Course Name" 
                value={newCourse.name} 
                onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })} 
              />
              <input 
                className="border p-2 w-full rounded mb-2" 
                placeholder="Course Code" 
                value={newCourse.code} 
                onChange={(e) => setNewCourse({ ...newCourse, code: e.target.value })} 
              />
              <div className="flex justify-end space-x-2">
                <button 
                  className="bg-gray-500 text-white px-4 py-2 rounded" 
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  className="bg-green-500 text-white px-4 py-2 rounded" 
                  onClick={handleAddCourse}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}

        {isEditDialogOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-lg font-bold mb-2">Edit Course</h2>
              <input 
                className="border p-2 w-full rounded mb-2" 
                placeholder="Course Name" 
                value={editCourse?.name} 
                onChange={(e) => setEditCourse({ ...editCourse, name: e.target.value })} 
              />
              <input 
                className="border p-2 w-full rounded mb-2" 
                placeholder="Course Code" 
                value={editCourse?.code} 
                onChange={(e) => setEditCourse({ ...editCourse, code: e.target.value })} 
              />
              <div className="flex justify-end space-x-2">
                <button 
                  className="bg-gray-500 text-white px-4 py-2 rounded" 
                  onClick={() => setIsEditDialogOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  className="bg-green-500 text-white px-4 py-2 rounded" 
                  onClick={handleUpdateCourse}
                >
                  Update
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
