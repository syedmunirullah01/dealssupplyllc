import React from "react";
import {
  FaShippingFast,
  FaDollarSign,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

const BottomBar = () => {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Rapid Shipping */}
        <div className="flex items-center justify-center space-x-4">
          <FaShippingFast className="text-3xl" />
          <div>
            <h3 className="font-semibold">Rapid Shipping</h3>
            <p>Fast delivery at your doorstep</p>
          </div>
        </div>

        {/* Competitive Pricing */}
        <div className="flex items-center justify-center space-x-4">
          <FaDollarSign className="text-3xl" />
          <div>
            <h3 className="font-semibold">Competitive Pricing</h3>
            <p>Best prices on all products</p>
          </div>
        </div>

        {/* 100% Genuine Products */}
        <div className="flex items-center justify-center space-x-4">
          <FaCheckCircle className="text-3xl" />
          <div>
            <h3 className="font-semibold">100% Genuine Products</h3>
            <p>Only authentic, quality items</p>
          </div>
        </div>

        {/* Best Quality */}
        <div className="flex items-center justify-center space-x-4">
          <FaStar className="text-3xl" />
          <div>
            <h3 className="font-semibold">Best Quality</h3>
            <p>Premium products for your home</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
