import React from "react";

const Services: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-screen-lg mx-auto">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Wholesale Services for Amazon FBA Supplier Success
        </h1>

        {/* Introduction */}
        <p className="text-lg text-gray-700 text-center mb-12">
          At Deals Supply, we deliver unparalleled value to our customers. Our
          vast selection of{" "}
          <span className="font-semibold">deeply discounted deals</span> is
          curated by expert buyers, ensuring you get the best prices available.
          As top wholesale suppliers for Amazon FBA, we focus on providing
          products to help you succeed in your business.
        </p>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Unmatched Value and Expertise
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Regardless of your business size or niche, we're committed to
              offering deals lower than typical wholesale prices, maximizing
              your return on investment.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Best Wholesale Products
            </h2>
            <p className="text-gray-700 leading-relaxed">
              From products to services, we provide exceptional value and
              savings. Find the best wholesale products to sell on Amazon and
              scale your business.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Trusted Source for Suppliers
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Whether you're a small startup or a large corporation, we make
              your experience seamless. Trust us for top-tier products and
              services.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Save Big on Wholesale Deals?
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Don't miss out on incredible discounts—start saving big with Deals
            Supply today!
          </p>
          <button className="px-8 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-300">
            Explore Our Deals
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
