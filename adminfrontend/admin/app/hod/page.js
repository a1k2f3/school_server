"use client";
import { useState } from "react";
import Sidebar from "../adminfinal/AdminComponents";

export default function HODManagement() {
  const [hods, setHods] = useState([
    { id: 1, name: "Dr. John Doe", department: "CS", email: "john@example.com" },
    { id: 2, name: "Dr. Jane Smith", department: "Math", email: "jane@example.com" },
  ]);

  const [newHod, setNewHod] = useState({ name: "", department: "", email: "" });
  const [editHod, setEditHod] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const addHod = () => {
    setHods([...hods, { id: hods.length + 1, ...newHod }]);
    setNewHod({ name: "", department: "", email: "" });
    setShowModal(false);
  };

  const updateHod = () => {
    setHods(hods.map(hod => (hod.id === editHod.id ? editHod : hod)));
    setEditHod(null);
    setShowModal(false);
  };

  const deleteHod = (id) => {
    setHods(hods.filter(hod => hod.id !== id));
  };

  return (
    <div className="flex">
      <Sidebar/>
      <div className="p-6 w-full">
        <h1 className="text-2xl font-bold mb-4">HOD Management</h1>

        {/* Add Button */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          onClick={() => setShowModal(true)}
        >
          Add HOD
        </button>

        {/* HOD Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Department</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {hods.map((hod) => (
                <tr key={hod.id} className="text-center">
                  <td className="border px-4 py-2">{hod.name}</td>
                  <td className="border px-4 py-2">{hod.department}</td>
                  <td className="border px-4 py-2">{hod.email}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                      onClick={() => {
                        setEditHod(hod);
                        setShowModal(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => deleteHod(hod.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Form */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-1/3">
              <h2 className="text-xl font-bold mb-4">
                {editHod ? "Edit HOD" : "Add HOD"}
              </h2>
              <input
                className="border w-full px-3 py-2 mb-2"
                type="text"
                placeholder="Name"
                value={editHod ? editHod.name : newHod.name}
                onChange={(e) =>
                  editHod
                    ? setEditHod({ ...editHod, name: e.target.value })
                    : setNewHod({ ...newHod, name: e.target.value })
                }
              />
              <input
                className="border w-full px-3 py-2 mb-2"
                type="text"
                placeholder="Department"
                value={editHod ? editHod.department : newHod.department}
                onChange={(e) =>
                  editHod
                    ? setEditHod({ ...editHod, department: e.target.value })
                    : setNewHod({ ...newHod, department: e.target.value })
                }
              />
              <input
                className="border w-full px-3 py-2 mb-4"
                type="email"
                placeholder="Email"
                value={editHod ? editHod.email : newHod.email}
                onChange={(e) =>
                  editHod
                    ? setEditHod({ ...editHod, email: e.target.value })
                    : setNewHod({ ...newHod, email: e.target.value })
                }
              />

              <div className="flex justify-end space-x-2">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => {
                    setEditHod(null);
                    setShowModal(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={editHod ? updateHod : addHod}
                >
                  {editHod ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
