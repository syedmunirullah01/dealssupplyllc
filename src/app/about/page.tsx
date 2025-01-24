import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-screen-lg mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12 tracking-tight">
          About Deals Supply LLC
        </h2>

        {/* Introduction Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Trusted Amazon FBA Suppliers & Distributors
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Deals Supply has pioneered a cutting-edge platform designed to
              revolutionize Amazon FBA Suppliers wholesale products. Our
              innovative software is tailored to elevate the Amazon FBA
              Suppliers experience for buyers and sellers, providing seamless
              inventory and procurement management. As one of the top wholesale
              suppliers for Amazon sellers, we offer competitive pricing and
              unmatched service.
            </p>
            <p className="text-lg text-gray-600">
              Whether you are a buyer looking for top-quality products or a
              seller wanting to streamline your inventory management, Deals
              Supply ensures the best wholesale solutions to grow your Amazon
              FBA business.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <Image
              src="/images/b3.jpg" // Replace with actual image URL
              alt="Deals Supply"
              className="rounded-lg shadow-lg max-w-full h-auto"
              width={500} // Specify the width
              height={300} // Specify the height
            />
          </div>
        </div>

        {/* Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                <i className="fas fa-cogs"></i>
              </div>
              <h4 className="text-xl font-semibold ml-4 text-gray-800">
                Streamlined Experience
              </h4>
            </div>
            <p className="text-lg text-gray-600">
              Our platform streamlines the wholesale buying and selling process,
              offering bulk purchases, real-time profit analysis tools, and a
              seamless transaction experience to save you valuable time.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                <i className="fas fa-chart-line"></i>
              </div>
              <h4 className="text-xl font-semibold ml-4 text-gray-800">
                Optimized for Growth
              </h4>
            </div>
            <p className="text-lg text-gray-600">
              Whether you&apos;re purchasing or selling, Deals Supply equips you
              with the right tools to propel your business forward. Our
              commitment to customer satisfaction and continuous improvement
              ensures the best outcomes for your Amazon FBA business.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                <i className="fas fa-handshake"></i>
              </div>
              <h4 className="text-xl font-semibold ml-4 text-gray-800">
                Trusted Partnerships
              </h4>
            </div>
            <p className="text-lg text-gray-600">
              At Deals Supply, we foster strong relationships with wholesalers
              and suppliers. This allows buyers to access exclusive deals and
              save big while ensuring high-quality products and a smooth buying
              experience.
            </p>
          </div>
        </div>

        {/* Why Deals Supply */}
        <div className="bg-gray-100 p-12 rounded-lg mb-16">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Why Choose Deals Supply LLC?
          </h3>
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Maximized Return on Investment
              </h4>
              <p className="text-lg text-gray-600">
                We offer deals that are significantly lower than typical
                wholesale prices, maximizing your return on investment and
                ensuring you get the most value out of every transaction.
              </p>
            </div>
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Comprehensive Inventory Management
              </h4>
              <p className="text-lg text-gray-600">
                Manage your inventory seamlessly with Deals Supply&apos;s
                comprehensive tools, designed to help you optimize product sales
                and gain insights into your business performance.
              </p>
            </div>
            <div className="lg:w-1/3">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Customer-Focused Service
              </h4>
              <p className="text-lg text-gray-600">
                Our customer-first approach means we focus on providing
                personalized, efficient service with every transaction. Whether
                you&apos;re buying or selling, we&apos;re here to help you
                succeed.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Revolutionize Your Wholesale Experience?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Join the Deals Supply network today and start benefiting from
            top-quality wholesale products, exclusive deals, and exceptional
            service.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
