// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-800">
          Propel Automation
        </a>

        {/* Navigation Links */}
        <div className="space-x-6">
          <a href="#solutions" className="text-gray-600 hover:text-blue-600 transition duration-300">
            Solutions
          </a>
          <a href="#why-us" className="text-gray-600 hover:text-blue-600 transition duration-300">
            Why Propel
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition duration-300">
            How It Works
          </a>
          <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;