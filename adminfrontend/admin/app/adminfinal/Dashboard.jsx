"use client "
import { FiSearch } from 'react-icons/fi';
// import Sidebar from './AdminComponents';
import Chart from './Chart';
import Sidebar from './AdminComponents';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar/>
      <div className="flex-1 p-6">
        <Header />
        <div className="grid grid-cols-3 gap-6 mt-6">
          <Card title="Revenue Updates" content={<Chart />} />
          <Card title="Sales Overview" content={<PieChart />} />
          <Card title="Income & Growth" content={<BarChart />} />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold">Welcome back, Mathew Anderson!</h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="p-2 pl-8 rounded-lg border border-gray-300"
        />
        <FiSearch className="absolute left-2 top-2 text-gray-400" />
      </div>
    </div>
  );
}

function Card({ title, content }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold mb-4">{title}</h3>
      {content}
    </div>
  );
}

function PieChart() {
  return <div>Pie Chart Placeholder</div>;
}

function BarChart() {
  return <div>Bar Chart Placeholder</div>;
}
