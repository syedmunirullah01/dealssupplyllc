"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image"; // Import next/image for optimized images

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [
    "/images/b5.jpg", // Banner 1 image
    "/images/b4.jpg", // Banner 2 image
    "/images/b3.jpg", // Banner 3 image
  ];

  const nextBanner = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  }, [banners.length]);

  // Auto move banners every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextBanner, 3000);
    return () => clearInterval(interval);
  }, [nextBanner]); // Add nextBanner to the dependency array

  return (
    <div className="relative overflow-hidden">
      <Image
        src={banners[currentIndex]}
        alt={`Banner ${currentIndex + 1}`}
        className="w-full h-[400px]"
        width={1920} // Set appropriate width
        height={400} // Set appropriate height
      />

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-black" : "bg-white opacity-50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
