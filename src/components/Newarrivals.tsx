import React from "react";

const products = [
  {
    id: 1,
    name: "Clear Care Plus",
    image: "/images/p1.jpg",
    moq: 100,
    bsr: 619,
    buttonColor: "bg-indigo-600 hover:bg-indigo-700",
  },
  {
    id: 2,
    name: "Crystal Light",
    image: "/images/p2.jpg",
    moq: 300,
    bsr: 75,
    buttonColor: "bg-pink-600 hover:bg-pink-700",
  },
  {
    id: 3,
    name: "KIND Minis",
    image: "/images/p3.jpg",
    moq: 250,
    bsr: 6502,
    buttonColor: "bg-teal-600 hover:bg-teal-700",
  },
  {
    id: 4,
    name: "5-hour Energy",
    image: "/images/p4.jpg",
    moq: 100,
    bsr: 6105,
    buttonColor: "bg-yellow-600 hover:bg-yellow-700",
  },
];

const NewArrivals: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-lg mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            New Arrivals
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the latest products in our collection. Curated just for
            you!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-5">
                {/* Product Image */}
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Product Info */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  MOQ:{" "}
                  <span className="font-medium text-gray-900">
                    {product.moq}
                  </span>
                </p>
                {/* Bottom Section */}
                <div className="flex justify-between items-center">
                  <button
                    className={`px-4 py-2 text-white text-sm rounded-lg font-medium transition-colors duration-200 ${product.buttonColor}`}
                  >
                    Apply Wholesale
                  </button>
                  <span className="text-sm text-gray-500">
                    BSR:{" "}
                    <span className="font-bold text-gray-800">
                      #{product.bsr}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
