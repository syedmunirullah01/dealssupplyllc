import React from "react";
import {
  PhoneIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image"; // Import Image from next/image

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md border-b border-gray-200">
      <div className="max-w-screen-lg mx-auto py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.jpg" // Add your logo here
            alt="Logo"
            width={160} // Set your logo width
            height={40} // Set your logo height
            className="w-40 h-auto"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-4 max-w-lg">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Icons and Contact Info */}
        <div className="flex items-center space-x-4">
          {/* Phone Icon and Number */}
          <div className="hidden lg:flex items-center space-x-2">
            <PhoneIcon className="w-5 h-5 text-gray-700" />
            <span className="text-gray-700 font-medium">+1 123 456 7890</span>
          </div>

          {/* Vertical Line */}
          <div className="hidden lg:block h-6 border-l border-gray-300"></div>

          {/* Heart Icon */}
          <button className="relative group hover:text-gray-500">
            <HeartIcon className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1 hidden group-hover:block">
              5
            </span>
          </button>

          {/* Shopping Cart Icon */}
          <button className="relative group hover:text-gray-500">
            <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-indigo-500 text-white text-xs rounded-full px-1 hidden group-hover:block">
              3
            </span>
          </button>
        </div>
      </div>

      {/* Search Bar for Mobile */}
      <div className="flex md:hidden px-6 pb-4">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </header>
  );
};

export default Header;
