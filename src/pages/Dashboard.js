// Dashboard.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import StatsCard from '../components/StatsCard';
import LineChartComponent from '../components/LineChartComponent';
import BarChart from '../components/BarChartComponent';
import { Outlet, Link } from "react-router-dom";
export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex">
        
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard title="Total Views" value="$3,456K" percentage="0.43" />
          <StatsCard title="Total Profit" value="$45.2K" percentage="4.35" />
          <StatsCard title="Total Products" value="2,450" percentage="2.59" />
          <StatsCard title="Total Users" value="3,456" percentage="0.95" />
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <LineChartComponent />
          </div>
          <div className="bg-white p-4 shadow rounded">
            <BarChart />
          </div>
        </div>

      </div>
      <Outlet/>
    </div>
  );
}
