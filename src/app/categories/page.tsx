"use client";

import { useState } from "react";
import Image from "next/image"; // Import next/image for optimized images
import Link from "next/link";

const Categories = () => {
  // Static categories and products data
  const categories = [
    { id: 1, name: "Beauty", image: "/images/c1.jpg" },
    { id: 2, name: "Health & Personal Care", image: "/images/c2.jpg" },
    { id: 3, name: "Garden", image: "/images/c3.jpg" },
    { id: 4, name: "Baby Products", image: "/images/c4.jpg" },
    { id: 5, name: "Electronics & Photo", image: "/images/c5.jpg" },
    { id: 6, name: "Stationery & Office Supplies", image: "/images/c6.jpg" },
    { id: 7, name: "Home & Kitchen", image: "/images/c7.jpg" },
  ];

  const products = [
    {
      id: 1,
      name: "Lipstick",
      category: "Beauty",
      image: "/images/p1.jpg",
      moq: 10,
      bsr: 50,
    },
    {
      id: 2,
      name: "Shampoo",
      category: "Health & Personal Care",
      image: "/images/p2.jpg",
      moq: 15,
      bsr: 120,
    },
    {
      id: 3,
      name: "Garden Hose",
      category: "Garden",
      image: "/images/p3.jpg",
      moq: 5,
      bsr: 85,
    },
    {
      id: 4,
      name: "Baby Bottle",
      category: "Baby Products",
      image: "/images/p4.jpg",
      moq: 20,
      bsr: 60,
    },
    {
      id: 5,
      name: "Camera",
      category: "Electronics & Photo",
      image: "/images/p5.jpg",
      moq: 1,
      bsr: 30,
    },
    {
      id: 6,
      name: "Notebook",
      category: "Stationery & Office Supplies",
      image: "/images/p6.jpg",
      moq: 50,
      bsr: 200,
    },
    {
      id: 7,
      name: "Blender",
      category: "Home & Kitchen",
      image: "/images/p7.jpg",
      moq: 10,
      bsr: 75,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : [];

  return (
    <div>
      {/* Full-width section with background image */}
      <div
        className="h-[400px] w-full bg-cover bg-center relative"
        style={{
          backgroundImage: `url('${
            selectedCategory
              ? categories.find(
                  (category) => category.name === selectedCategory
                )?.image
              : "/images/b3.jpg"
          }')`,
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Centered title */}
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white">
            {selectedCategory || "Categories"}
          </h1>
        </div>
      </div>

      {/* Horizontal list of categories in circles */}
      <div className="my-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-4">
          Explore Categories
        </h2>
        <div className="flex justify-center space-x-6 overflow-x-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
              className="cursor-pointer flex flex-col items-center group"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 shadow group-hover:shadow-lg transition">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  width={500} // Set appropriate width
                  height={500} // Set appropriate height
                />
              </div>
              <p className="mt-2 text-sm font-medium group-hover:text-blue-500">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Display selected category products */}
      <div className="p-8">
        {selectedCategory ? (
          <div className="max-w-screen-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Products in &quot;{selectedCategory}&quot;
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 bg-white"
                >
                  <Link href={`/products/${product.id}`}>
                    <div className="relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                        width={500} // Set appropriate width
                        height={300} // Set appropriate height
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition"></div>
                    </div>
                  </Link>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      {product.name}
                    </h3>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <p>MOQ: {product.moq}</p>
                      <p>BSR: {product.bsr}</p>
                    </div>
                    <Link href="/applywholesale">
                      <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded-md hover:bg-blue-700 transition-colors">
                        Apply Wholesale
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h2 className="text-xl text-center text-gray-500">
            Select a category to see products
          </h2>
        )}
      </div>
    </div>
  );
};

export default Categories;
