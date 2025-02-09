"use client";
import Link from "next/link";
import { FiHome, FiBarChart2, FiBox, FiTag, FiLock, FiSettings, FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="bg-gray-900 text-white w-64 h-screen flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-8">eMart</h1>
      <nav className="space-y-4">
        <NavItem icon={<FiHome />} text="Dashboard" href="/adminfinal" active />
        <NavItem icon={<FiBarChart2 />} text="Department" href="/department" active />
        <NavItem icon={<FiBox />} text="HOD" href="/hod" active />
        <NavItem icon={<FiTag />} text="Course" href="/course" active />
        <NavItem icon={<FiLock />} text="Teacher" href="/teacher" active />
        <NavItem icon={<FiBarChart2 />} text="Analytics" href="/analytics" active />
        <NavItem icon={<FiSettings />} text="Settings" href="/settings" active />
      </nav>
      <div className="mt-auto">
        <NavItem icon={<FiLogOut />} text="Log out" href="/logout" />
      </div>
    </div>
  );
}

function NavItem({ icon, text, href, active }) {
  return (
    <Link href={href} className="block">
      <div
        className={`flex items-center p-2 rounded cursor-pointer ${
          active ? "bg-gray-700" : "hover:bg-gray-700"
        }`}
      >
        <div className="mr-3">{icon}</div>
        <span>{text}</span>
      </div>
    </Link>
  );
}
