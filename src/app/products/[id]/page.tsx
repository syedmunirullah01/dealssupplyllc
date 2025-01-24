"use client";

import { useParams } from "next/navigation"; // Use useParams for dynamic routing
import React from "react";
import Image from "next/image"; // For optimized image rendering
import { BsCartDash } from "react-icons/bs"; // Cart icon for the button
import Link from "next/link"; // Link component for navigation to the cart
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Star icons for rating
import Banner from "@/components/Banner";

// Sample product data (replace with actual API or state management)
const products = [
  {
    id: 1,
    name: "Clear Care Plus",
    moq: 5,
    bsr: "A100",
    image: "/images/1.jpg",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Crystal Light Lemonade",
    moq: 10,
    bsr: "B200",
    image: "/images/2.jpg",
    rating: 3.5,
  },
  {
    id: 3,
    name: "Tampax Pearl Plastic",
    moq: 15,
    bsr: "C300",
    image: "/images/3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "KIND Minis",
    moq: 20,
    bsr: "D400",
    image: "/images/4.jpg",
    rating: 4.0,
  },
  {
    id: 5,
    name: "2 Pack of TRESemme TRES",
    moq: 25,
    bsr: "E500",
    image: "/images/5.jpg",
    rating: 3.0,
  },
  {
    id: 6,
    name: "Ole Mexican Foods Xtreme",
    moq: 30,
    bsr: "F600",
    image: "/images/6.jpg",
    rating: 4.2,
  },
  {
    id: 7,
    name: "Salonpas LIDOCAINE",
    moq: 35,
    bsr: "G700",
    image: "/images/7.jpg",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Pepperidge Farm Goldfish",
    moq: 40,
    bsr: "H800",
    image: "/images/8.jpg",
    rating: 4.1,
  },
  {
    id: 9,
    name: "5-hour Energy Shot",
    moq: 45,
    bsr: "I900",
    image: "/images/9.jpg",
    rating: 4.8,
  },
  {
    id: 10,
    name: "Citracal maximum D3",
    moq: 50,
    bsr: "J1000",
    image: "/images/10.jpg",
    rating: 3.5,
  },
  {
    id: 11,
    name: "Coca-Cola Classic",
    moq: 60,
    bsr: "K1100",
    image: "/images/11.jpg",
    rating: 4.4,
  },
  {
    id: 12,
    name: "Pepsi Zero Sugar",
    moq: 70,
    bsr: "L1200",
    image: "/images/12.jpg",
    rating: 4.0,
  },
  {
    id: 13,
    name: "Gatorade Lemon Lime",
    moq: 15,
    bsr: "M1300",
    image: "/images/13.jpg",
    rating: 4.3,
  },
  {
    id: 14,
    name: "Doritos Nacho Cheese",
    moq: 25,
    bsr: "N1400",
    image: "/images/14.jpg",
    rating: 4.6,
  },
  {
    id: 15,
    name: "Lays Classic Chips",
    moq: 10,
    bsr: "O1500",
    image: "/images/15.jpg",
    rating: 4.2,
  },
  {
    id: 16,
    name: "SunChips Harvest Cheddar",
    moq: 30,
    bsr: "P1600",
    image: "/images/16.jpg",
    rating: 4.1,
  },
  {
    id: 17,
    name: "Quaker Instant Oatmeal",
    moq: 40,
    bsr: "Q1700",
    image: "/images/17.jpg",
    rating: 4.5,
  },
  {
    id: 18,
    name: "Capri Sun Pacific Cooler",
    moq: 50,
    bsr: "R1800",
    image: "/images/18.jpg",
    rating: 4.0,
  },
  {
    id: 19,
    name: "Minute Maid Apple Juice",
    moq: 60,
    bsr: "S1900",
    image: "/images/19.jpg",
    rating: 4.3,
  },
  {
    id: 20,
    name: "M&M's Peanut Chocolate",
    moq: 25,
    bsr: "T2000",
    image: "/images/20.jpg",
    rating: 4.7,
  },
  {
    id: 21,
    name: "Snickers Fun Size",
    moq: 35,
    bsr: "U2100",
    image: "/images/21.jpg",
    rating: 4.5,
  },
  {
    id: 22,
    name: "Hershey's Milk Chocolate",
    moq: 45,
    bsr: "V2200",
    image: "/images/22.jpg",
    rating: 4.3,
  },
  {
    id: 23,
    name: "Lindt Swiss Chocolate",
    moq: 55,
    bsr: "W2300",
    image: "/images/23.jpg",
    rating: 4.8,
  },
  {
    id: 24,
    name: "KitKat Milk Chocolate",
    moq: 30,
    bsr: "X2400",
    image: "/images/24.jpg",
    rating: 4.4,
  },
  {
    id: 25,
    name: "Ghirardelli Dark Chocolate",
    moq: 40,
    bsr: "Y2500",
    image: "/images/25.jpg",
    rating: 4.6,
  },
  {
    id: 26,
    name: "Bounty Coconut Chocolate",
    moq: 50,
    bsr: "Z2600",
    image: "/images/26.jpg",
    rating: 4.2,
  },
  {
    id: 27,
    name: "Nature Valley Granola Bar",
    moq: 10,
    bsr: "AA2700",
    image: "/images/27.jpg",
    rating: 4.0,
  },
  {
    id: 28,
    name: "Clif Bar Crunchy Peanut Butter",
    moq: 20,
    bsr: "BB2800",
    image: "/images/28.jpg",
    rating: 4.1,
  },
  {
    id: 29,
    name: "Slim Jim Original",
    moq: 15,
    bsr: "CC2900",
    image: "/images/29.jpg",
    rating: 4.4,
  },
  {
    id: 30,
    name: "Beef Jerky Jack Link's Original",
    moq: 25,
    bsr: "DD3000",
    image: "/images/30.jpg",
    rating: 4.6,
  },
];

const ProductPage = () => {
  const { id } = useParams(); // Extract the dynamic ID from the URL

  // Find the product with the corresponding ID
  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  // Function to render the stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = Math.round(rating % 1);
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-400" />
        ))}
        {halfStars === 1 && <FaStarHalfAlt className="text-yellow-400" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-yellow-400" />
        ))}
      </>
    );
  };

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row gap-10 bg-white p-6 rounded-lg shadow-lg">
        <div className="md:w-1/2 mx-auto relative w-[200px] h-[200px] sm:w-full sm:h-full">
          <Image
            src={product.image}
            alt={product.name}
            width={500} // Setting width to 200
            height={500} // Setting height to 200
            className="rounded-xl object-cover hover:drop-shadow-xl"
            priority
          />
        </div>

        <div className="md:w-1/2 flex flex-col mx-5">
          <div className="lg:pb-10 pb-5 border-b border-[#D9D9D9]">
            <h2 className="lg:text-4xl text-2xl text-[#272343] font-bold mb-4">
              {product.name}
            </h2>
            <p className="text-lg text-[#029FAE] font-semibold mb-2">
              <strong>MOQ:</strong> {product.moq}
            </p>
            <p className="text-lg text-[#F5813F] font-semibold mb-2">
              <strong>BSR:</strong> {product.bsr}
            </p>
            <div className="flex items-center mb-4">
              {/* Render the stars based on the product rating */}
              {renderStars(product.rating)}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-[#272343]/60 tracking-wide text-sm md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
              minus hic? Odit, debitis! Quisquam, enim aboriosam nam
              exercitationem mollitia.
            </p>
            <button className="w-fit rounded-lg mt-4 px-4 py-2 items-center gap-3 text-white bg-[#029FAE] flex">
              <BsCartDash /> <Link href="/cart">Apply Wholesale</Link>
            </button>
          </div>
        </div>
      </div>
      {/* Make BottomBar full width */}
      <div className="w-full">
        <Banner />
      </div>
    </div>
  );
};

export default ProductPage;
