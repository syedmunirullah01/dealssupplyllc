import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

const TopBar: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="max-w-screen-lg mx-auto py-4 px-4 md:px-6 flex justify-between items-center text-sm text-gray-700">
        {/* Left Side */}
        <div className="font-medium text-white text-xs md:text-sm">
          Welcome To <span className="font-bold">EMPIRE DISTRIBUTOR CORP.</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6 text-white text-xs md:text-sm">
          <button className="flex items-center space-x-1 hover:underline">
            <QuestionMarkCircleIcon className="w-5 h-5 text-white" />
            <span>Need Help?</span>
          </button>
          {/* Vertical Line */}
          <div className="h-6 border-l border-gray-400"></div>

          {/* Apply Wholesale Button */}
          <Link href="/applywholesale">
            <button className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-300">
              Apply Wholesale
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
