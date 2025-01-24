"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaSort } from "react-icons/fa";

const AllProducts: React.FC = () => {
  // Array of 30 product data
  const products = [
    {
      id: 1,
      name: "Clear Care Plus",
      moq: 5,
      bsr: "A100",
      image: "/images/1.jpg",
    },
    {
      id: 2,
      name: "Crystal Light Lemonade",
      moq: 10,
      bsr: "B200",
      image: "/images/2.jpg",
    },
    {
      id: 3,
      name: "Tampax Pearl Plastic",
      moq: 15,
      bsr: "C300",
      image: "/images/3.jpg",
    },
    { id: 4, name: "KIND Minis", moq: 20, bsr: "D400", image: "/images/4.jpg" },
    {
      id: 5,
      name: "2 Pack of TRESemme TRES",
      moq: 25,
      bsr: "E500",
      image: "/images/5.jpg",
    },
    {
      id: 6,
      name: "Ole Mexican Foods Xtreme",
      moq: 30,
      bsr: "F600",
      image: "/images/6.jpg",
    },
    {
      id: 7,
      name: "Salonpas LIDOCAINE",
      moq: 35,
      bsr: "G700",
      image: "/images/7.jpg",
    },
    {
      id: 8,
      name: "Pepperidge Farm Goldfish",
      moq: 40,
      bsr: "H800",
      image: "/images/8.jpg",
    },
    {
      id: 9,
      name: "5-hour Energy Shot",
      moq: 45,
      bsr: "I900",
      image: "/images/9.jpg",
    },
    {
      id: 10,
      name: "Citracal maximum D3",
      moq: 50,
      bsr: "J1000",
      image: "/images/10.jpg",
    },
    {
      id: 11,
      name: "MiraLAX Supplement",
      moq: 55,
      bsr: "K1100",
      image: "/images/11.png",
    },
    {
      id: 12,
      name: "Nature Made Ultra",
      moq: 60,
      bsr: "L1200",
      image: "/images/12.jpg",
    },
    {
      id: 13,
      name: "Nature Made Adult Gummies",
      moq: 65,
      bsr: "M1300",
      image: "/images/13.jpg",
    },
    {
      id: 14,
      name: "SCS Excedrin MigraineTablets",
      moq: 70,
      bsr: "N1400",
      image: "/images/14.jpg",
    },
    {
      id: 15,
      name: "Simply Saline Adult Nasal Mist",
      moq: 75,
      bsr: "O1500",
      image: "/images/15.jpg",
    },
    {
      id: 16,
      name: "MiraLAX Powder Laxative",
      moq: 80,
      bsr: "P1600",
      image: "/images/16.jpg",
    },
    {
      id: 17,
      name: "Gatorade Zero - Gatorade",
      moq: 85,
      bsr: "Q1700",
      image: "/images/17.jpg",
    },
    {
      id: 18,
      name: "Advil Liquid Gels",
      moq: 90,
      bsr: "R1800",
      image: "/images/18.jpg",
    },
    {
      id: 19,
      name: "Member's Mark Chicken",
      moq: 95,
      bsr: "S1900",
      image: "/images/19.jpg",
    },
    {
      id: 20,
      name: "Dulcolax Laxative Tablets",
      moq: 100,
      bsr: "T2000",
      image: "/images/20.jpg",
    },
    {
      id: 21,
      name: "Folgers Classic Roast",
      moq: 105,
      bsr: "U2100",
      image: "/images/21.jpg",
    },
    {
      id: 22,
      name: "Member's Mark Ultimate",
      moq: 110,
      bsr: "V2200",
      image: "/images/22.jpg",
    },
    {
      id: 23,
      name: "Cesar Canine Cuisine Wet",
      moq: 115,
      bsr: "W2300",
      image: "/images/23.jpg",
    },
    {
      id: 24,
      name: "G.H. Cretors Chicago",
      moq: 120,
      bsr: "X2400",
      image: "/images/24.jpg",
    },
    {
      id: 25,
      name: "Dunkin' Donuts Original",
      moq: 125,
      bsr: "Y2500",
      image: "/images/25.jpg",
    },
    {
      id: 26,
      name: "Chock full o' Nuts",
      moq: 130,
      bsr: "Z2600",
      image: "/images/26.jpg",
    },
    {
      id: 27,
      name: "NeilMed Sinus Rinse",
      moq: 135,
      bsr: "A2700",
      image: "/images/27.jpg",
    },
    {
      id: 28,
      name: "Maxwell House Coffee",
      moq: 140,
      bsr: "B2800",
      image: "/images/28.jpg",
    },
    {
      id: 29,
      name: "Kraft Velveeta-32 oz",
      moq: 145,
      bsr: "C2900",
      image: "/images/29.jpg",
    },
    {
      id: 30,
      name: "Member's Mark 650 mg",
      moq: 150,
      bsr: "D3000",
      image: "/images/30.jpg",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Show 8 products per page
  const [sortedProducts, setSortedProducts] = useState(products);
  const [sortOption, setSortOption] = useState("low-to-high"); // Default sorting by low-to-high BSR
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state for sorting

  useEffect(() => {
    // Sort products by BSR
    const sorted = [...products];
    sorted.sort((a, b) => {
      if (sortOption === "low-to-high") {
        return a.bsr.localeCompare(b.bsr);
      } else if (sortOption === "high-to-low") {
        return b.bsr.localeCompare(a.bsr);
      }
      return 0;
    });
    setSortedProducts(sorted);
  }, [sortOption]); // Only depend on sortOption

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-8">
      {/* Sort by BSR Button */}
      <div className="flex justify-end mb-6 relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center space-x-2 p-2 border border-gray-300 rounded-md hover:border-indigo-500 transition-all duration-300"
        >
          <FaSort />
          <span>Sort by BSR</span>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-300">
            <ul>
              <li>
                <button
                  onClick={() => {
                    setSortOption("low-to-high");
                    setDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-indigo-600 hover:text-white"
                >
                  BSR: Low to High
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSortOption("high-to-low");
                    setDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-indigo-600 hover:text-white"
                >
                  BSR: High to Low
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Display Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            <Link href={`/products/${product.id}`} passHref>
              <div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500} // Set width
                  height={300} // Set height
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <p className="mb-2">
                    <strong>MOQ:</strong> {product.moq}
                  </p>
                  <p>
                    <strong>BSR:</strong> {product.bsr}
                  </p>
                </div>
              </div>
            </Link>
            <Link href={`/products/${product.id}`} passHref>
              <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300">
                Apply Wholesale
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-4 mt-6">
        {Array.from(
          { length: Math.ceil(products.length / productsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`w-10 h-10 flex items-center justify-center text-sm font-semibold text-gray-800 bg-white border-2 border-gray-300 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out transform ${
                currentPage === index + 1
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : ""
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default AllProducts;
