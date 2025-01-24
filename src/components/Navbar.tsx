"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null); // Use ref to store timeout id

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current); // Clear any existing timeout if mouse re-enters
    }
    setIsDropdownOpen(true); // Open the dropdown immediately
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false); // Close the dropdown after a slight delay
    }, 200); // Adjust the delay time (in milliseconds) as needed
  };

  return (
    <nav className="w-full bg-white text-black py-4 px-6 border-b border-gray-300">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <div className="hidden md:flex items-center space-x-12">
          <Link href="/" className="ml-6 hover:text-gray-300">
            Home
          </Link>

          {/* Dropdown Menu for All Categories */}
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter} // Open dropdown on hover
            onMouseLeave={handleMouseLeave} // Close dropdown with delay
          >
            <button className="hover:text-gray-300 flex items-center">
              All Categories
              <FiChevronDown
                className={`ml-2 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-md w-48 z-50">
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
          <Link href="/products" className="hover:text-gray-300">
            Products
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
            Download Product List
          </Link>
        </div>

        <div className="md:hidden">
          <button
            className="text-black hover:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link
            href="/"
            className="block text-lg hover:text-gray-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-lg hover:text-gray-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/products"
            className="block text-lg hover:text-gray-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="block text-lg hover:text-gray-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/services"
            className="block text-lg hover:text-gray-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="https://docs.google.com/spreadsheets/d/1Ca3bF9Ctv6hTyWvNnn_lv1MQQDAixj-aUTdZCJhhvvI/edit?gid=1625076185#gid=1625076185"
            className="block text-lg hover:text-gray-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Download Product List
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
