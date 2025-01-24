import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-screen-lg mx-auto">
        {/* Hero Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* First Larger Deal - Vertical Bigger Box */}
          <div className="col-span-3 h-[450px] rounded-lg shadow-lg relative">
            <img
              src="/images/b3.jpg" // Replace with actual image URL
              alt="Big Deal"
              className="w-full h-full object-cover rounded-lg absolute top-0 left-0"
            />
            <div className="text-orange-600 p-6 absolute bottom-6 left-6">
              <h1 className="text-5xl font-bold">
                Welcome To Amazon FBA Supplier FBA Your Trusted Wholesale
                Distribution Services
              </h1>
              {/* Apply Wholesale Button */}
              <button className="mt-4 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300">
                Apply Wholesale
              </button>
            </div>
          </div>

          {/* Second Smaller Deal (Right of Big Deal) */}
          <div className="col-span-2  h-[300px] rounded-lg shadow-lg relative">
            <img
              src="/images/b4.jpg" // Replace with actual image URL
              alt="Medium Deal"
              className="w-full h-full object-cover rounded-lg absolute top-0 left-0"
            />
            <div className="text-yellow-300 p-6 absolute bottom-6 left-6 top-2">
              <h1 className="text-2xl font-bold">
                Trusted Amazon FBA Suppliers for FBA Sellers
              </h1>
              <p className="mt-2">
                At Deals Supply, we provide a diverse range of high-quality
                Amazon FBA Suppliers wholesale products designed to meet the
                needs of Amazon FBA Suppliers and other businesses.
              </p>
              {/* Contact Us Button */}
              <button className="mt-4 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-800 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>

          {/* Third Deal (Spans Full Width and Below the First Deal) */}
          <div className="bg-yellow-500 h-72 rounded-lg shadow-lg col-span-3 relative">
            <img
              src="/images/b5.jpg" // Replace with actual image URL
              alt="Small Deal"
              className="w-full h-full object-cover rounded-lg absolute top-0 left-0"
            />
            <div className="text-blue-300 p-6 absolute bottom-6 left-6">
              <h1 className="text-4xl font-bold">
                Unlock Massive Savings on Bulk Purchases!
              </h1>
              <p className="mt-2 font-bold text-blue-200">
                At Amazon FBA Supplier, we're your trusted wholesale
                distribution partner. We're offering exclusive deals for Amazon
                FBA sellers to get access to top-quality products at unbeatable
                prices.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Apply for Bulk Discounts
              </button>
            </div>
          </div>

          {/* Single Larger Deal Below Small Deal */}
          <div className="col-span-2  h-72 rounded-lg shadow-lg relative">
            <img
              src="/images/b6.jpg" // Replace with actual image URL
              alt="Large Deal"
              className="w-full h-full object-cover rounded-lg absolute top-0 left-0"
            />
            <div className="text-orange-600 p-6 absolute bottom-6 left-6">
              <h2 className="text-2xl font-bold">
                Get It Fast with Rapid Shipping!
              </h2>
              <p className="mt-2">
                Get your products delivered fast with our Rapid Shipping! Enjoy
                quick, reliable delivery straight to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
