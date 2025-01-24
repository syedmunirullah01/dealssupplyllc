import Image from "next/image";
import Link from "next/link";
import React from "react";

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

  return (
    <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 py-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        >
          <Link href={`/products/${product.id}`} passHref>
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={500} // You should set dimensions
                height={300} // Set a fixed height
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
  );
};

export default AllProducts;