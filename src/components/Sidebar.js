import React, { useState } from 'react';
import { FcBarChart } from "react-icons/fc";
import { MdOutlineDashboard, MdOutlineMessage, MdOutlineInbox, MdOutlineDescription } from "react-icons/md";
import { BsTable } from "react-icons/bs";
import { AiOutlineForm, AiOutlineSetting } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import { CgFormatIndentDecrease } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
function Sidebar({ isOpen }) {
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedSubsection, setExpandedSubsection] = useState(null);
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  const toggleSubsection = (subsection) => {
    setExpandedSubsection((prev) => (prev === subsection ? null : subsection));
  };

  return (
    <div className={`bg-gray-900 text-white w-64 min-h-screen p-5 ${isOpen ? 'block' : 'hidden'} md:block`}>
      <h2 className="text-2xl font-bold flex items-center mb-5">
        <FcBarChart className="mr-2" /> TailAdmin
      </h2>

      <ul className="space-y-4">
        <li 
          className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer"
          onClick={() => toggleSection('dashboard')}
        >
          <MdOutlineDashboard className="mr-2" /> <span>Dashboard</span>
          {expandedSection === 'dashboard' ? <CgChevronUp className="ml-auto" /> : <CgChevronDown className="ml-auto" />}
        </li>
        {expandedSection === 'dashboard' && (
          <ul className="pl-8 space-y-2 mt-2">
             <li className="py-1 cursor-pointer hover:bg-gray-700 rounded">eCommerce</li>
            <li className="py-1 cursor-pointer hover:bg-gray-700 rounded">Overview</li>
            <li className="py-1 cursor-pointer hover:bg-gray-700 rounded">Analytics</li>
            <li className="py-1 cursor-pointer hover:bg-gray-700 rounded">Reports</li>
          </ul>
        )}
        <li 
          className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer"
          onClick={() => toggleSection('task')}
        >
          <CgFormatIndentDecrease  className="mr-2" /> <span>Task</span>
          {expandedSection === 'task' ? <CgChevronUp className="ml-auto" /> : <CgChevronDown className="ml-auto" />}
        </li>

        <li 
          className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer"
          onClick={() => toggleSection('forms')}
        >
          <AiOutlineForm className="mr-2" /> <span>Forms</span>
          {expandedSection === 'forms' ? <CgChevronUp className="ml-auto" /> : <CgChevronDown className="ml-auto" />}
        </li>
        {expandedSection === 'forms' && (
          <ul className="pl-8 space-y-2 mt-2">
            <li
              className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer"
              onClick={() => toggleSubsection('formElements')}
            >
              Form Elements
              <span className="ml-auto bg-blue-500 text-xs font-semibold px-2 py-1 rounded">Pro</span>
              {expandedSubsection === 'formElements' ? <CgChevronUp className="ml-2" /> : <CgChevronDown className="ml-2" />}
            </li>
            {expandedSubsection === 'formElements' && (
              <ul className="pl-4 mt-2 space-y-2">
                <li className="py-1 cursor-pointer hover:bg-gray-700 rounded" onClick={() => navigate('/Dash')}>Pro Form Elements</li>
                <li className="py-1 cursor-pointer hover:bg-gray-700 rounded">Form Layout</li>
              </ul>
            )}
            <li className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
              Pro Form Layout
              <span className="ml-auto bg-blue-500 text-xs font-semibold px-2 py-1 rounded">Pro</span>
            </li>
          </ul>
        )}
        <li 
          className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer"
          onClick={() => toggleSection('tables')}
        >
          <BsTable className="mr-2" /> <span>Tables</span>
          {expandedSection === 'tables' ? <CgChevronUp className="ml-auto" /> : <CgChevronDown className="ml-auto" />}
        </li>
        {expandedSection === 'tables' && (
          <ul className="pl-8 space-y-2 mt-2">
            <li className="py-1 cursor-pointer hover:bg-gray-700 rounded">Basic Tables</li>
            <li className="py-1 cursor-pointer hover:bg-gray-700 rounded">Data Tables</li>
          </ul>
        )}
        <li 
          className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer"
          onClick={() => toggleSection('pages')}
        >
          <AiOutlineSetting className="mr-2" /> <span>Pages</span>
          {expandedSection === 'pages' ? <CgChevronUp className="ml-auto" /> : <CgChevronDown className="ml-auto" />}
        </li>
        {expandedSection === 'pages' && (
          <ul className="pl-8 space-y-2 mt-2">
            <li className="py-1 cursor-pointer hover:bg-gray-700 rounded">Login</li>
            <li className="py-1 cursor-pointer hover:bg-gray-700 rounded">Register</li>
          </ul>
        )}

        {/* Support Section */}
        <div className="text-gray-500 font-semibold mt-8">SUPPORT</div>
        <li 
          className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer"
          onClick={() => toggleSection('support')}
        >
          <MdOutlineMessage className="mr-2" /> <span>Messages</span>
          <span className="ml-auto bg-blue-500 text-xs font-semibold px-2 py-1 rounded">5</span>
          {expandedSection === 'support' ? <CgChevronUp className="ml-2" /> : <CgChevronDown className="ml-2" />}
        </li>
        {expandedSection === 'support' && (
          <ul className="pl-8 space-y-2 mt-2">
            <li className="py-1 cursor-pointer hover:bg-gray-700 rounded">Inbox</li>
            <li className="py-1 cursor-pointer hover:bg-gray-700 rounded">Invoice</li>
          </ul>
        )}

        {/* Other Sections */}
        <li className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
          <FiMail className="mr-2" /> <span>Other</span>
        </li>
        <li className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
          <MdOutlineInbox className="mr-2" /> <span>UI Elements</span>
        </li>
        <li className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
          <MdOutlineDescription className="mr-2" /> <span>Authentication</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
