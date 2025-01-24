import React from "react";
import Image from "next/image"; // Import Image from next/image
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-screen-lg mx-auto">
        {/* Hero Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* First Larger Deal - Vertical Bigger Box */}
          <div className="col-span-3 h-[450px] rounded-lg shadow-lg relative">
            <Image
              src="/images/b3.jpg" // Replace with actual image URL
              alt="Big Deal"
              layout="fill"
              objectFit="cover"
              className="rounded-lg absolute top-0 left-0"
            />
            <div className="text-orange-600 p-6 absolute bottom-6 left-6 max-w-[90%] sm:max-w-[80%]">
              <h1 className="text-4xl sm:text-3xl font-bold">
                Welcome To Amazon FBA Supplier FBA Your Trusted Wholesale
                Distribution Services
              </h1>
              {/* Apply Wholesale Button */}
              <Link href="/applywholesale">
                <button className="mt-4 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300">
                  Apply Wholesale
                </button>
              </Link>
            </div>
          </div>

          {/* Second Smaller Deal (Right of Big Deal) */}
          <div className="col-span-2 h-[300px] rounded-lg shadow-lg relative">
            <Image
              src="/images/b4.jpg" // Replace with actual image URL
              alt="Medium Deal"
              layout="fill"
              objectFit="cover"
              className="rounded-lg absolute top-0 left-0"
            />
            <div className="text-yellow-300 p-6 absolute bottom-6 left-6  max-w-[90%] sm:max-w-[80%]">
              <h2 className="text-2xl font-bold">
                Trusted Amazon FBA Suppliers for FBA Sellers
              </h2>
              <p className="mt-2 text-sm sm:text-base">
                At Deals Supply, we provide a diverse range of high-quality
                Amazon FBA Suppliers wholesale products.
              </p>
              {/* Contact Us Button */}
              <Link href="/contact">
                <button className=" mt-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-800 transition-all duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Third Deal (Spans Full Width and Below the First Deal) */}
          <div className="bg-yellow-500 h-72 rounded-lg shadow-lg col-span-3 relative">
            <Image
              src="/images/b5.jpg" // Replace with actual image URL
              alt="Small Deal"
              layout="fill"
              objectFit="cover"
              className="rounded-lg absolute top-0 left-0"
            />
            <div className="text-blue-300 p-6 absolute bottom-6 left-6 max-w-[90%] sm:max-w-[80%]">
              <h2 className="text-4xl sm:text-3xl font-bold">
                Save Big on Bulk Orders!
              </h2>
              <Link href="/products">
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  Apply for Bulk Discounts
                </button>
              </Link>
            </div>
          </div>

          {/* Single Larger Deal Below Small Deal */}
          <div className="col-span-2 h-72 rounded-lg shadow-lg relative">
            <Image
              src="/images/b6.jpg" // Replace with actual image URL
              alt="Large Deal"
              layout="fill"
              objectFit="cover"
              className="rounded-lg absolute top-0 left-0"
            />
            <div className="text-orange-600 p-6 absolute bottom-6 left-6 max-w-[90%] sm:max-w-[80%]">
              <h2 className="text-2xl sm:text-xl font-bold">
                Get It Fast with Rapid Shipping!
              </h2>
              <p className="mt-2 text-sm sm:text-base">
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
