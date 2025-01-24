import React from "react";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-screen-lg mx-auto space-y-8">
        {/* Large Banner */}
        <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/b3.jpg"
            alt="Large Banner"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-40" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-yellow-400">
            <h3 className="text-3xl sm:text-4xl font-bold">
              Discover Our New Collection
            </h3>
            <p className="mt-2 text-lg">
              Explore Our Latest Arrivals! Discover unique styles, unbeatable
              deals, and top-quality products just for you.
            </p>
            <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200">
              Shop Now
            </button>
          </div>
        </div>

        {/* Smaller Banner */}
        <div className="relative w-full h-48 sm:h-60 lg:h-72 bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/b5.jpg"
            alt="Small Banner"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-40" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-blue-300">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Limited Time Offer
            </h3>
            <p className="mt-2 text-lg">
              Hurry, Limited Time Only! Get exclusive deals on your favorite
              products before they&apos;re gone.
            </p>
            <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
