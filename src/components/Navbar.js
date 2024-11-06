// Navbar.jsx
import React from 'react';
import { FiSearch, FiBell, FiLock, FiHeart, FiMenu } from 'react-icons/fi';

function Navbar({ toggleSidebar }) {
  return (
    <div className="flex items-center justify-between bg-white shadow p-4 md:px-6">
      <button className="text-gray-500 md:hidden" onClick={toggleSidebar}>
        <FiMenu className="text-2xl" />
      </button>
      
      <div className="flex items-center w-full md:w-1/3">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Type to search..."
          className="w-full rounded p-2 text-gray-600 focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FiLock className="text-gray-500 text-xl" />
        <FiHeart className="text-gray-500 text-xl relative">
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </FiHeart>
        <FiBell className="text-gray-500 text-xl relative">
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </FiBell>
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/32"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="hidden md:block">
            <p className="text-sm font-semibold">Thomas Arnee</p>
            <p className="text-xs text-gray-500">UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
