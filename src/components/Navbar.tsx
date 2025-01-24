"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link from next/link
import { FiChevronDown } from "react-icons/fi"; // Import the React icon

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="max-w-screen-lg mx-auto bg-white text-black py-4 px-6 border-b border-gray-300">
      <div className="flex justify-between items-center">
        {/* Center - Navigation Links */}
        <div className="hidden md:flex items-center space-x-12">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>

          {/* Dropdown Menu for All Categories */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-gray-300">All Categories</button>
            <button className="ml-2 text-gray-700 hover:text-gray-500">
              <FiChevronDown
                className={`transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-md w-48">
                <ul>
                  <li>
                    <Link
                      href="/category-1"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Category 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/category-2"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Category 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/category-3"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Category 3
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/shop" className="hover:text-gray-300">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link
            href="https://docs.google.com/spreadsheets/d/1Ca3bF9Ctv6hTyWvNnn_lv1MQQDAixj-aUTdZCJhhvvI/edit?gid=1625076185#gid=1625076185"
            className="hover:text-gray-300"
          >
            Download Produc List
          </Link>
        </div>

        {/* Right Side - Responsive Menu Button */}
        <div className="md:hidden">
          <button className="text-white hover:text-gray-300">
            {/* Add a menu icon here if needed */}☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
