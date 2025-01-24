"use client";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const ApplyWholesale = () => {
  const [wholesaleDetails, setWholesaleDetails] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    email: "",
    phone: "",
    employeeId: "",
    sellerPermit: null as File | null,
    yearsInBusiness: "",
    sellingLocation: "",
    howHeard: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWholesaleDetails({ ...wholesaleDetails, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setWholesaleDetails({
        ...wholesaleDetails,
        sellerPermit: e.target.files[0],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Wholesale account application submitted!");
  };

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-8 bg-white shadow-xl rounded-lg">
      <Link href="/" passHref>
        <button className="flex items-center space-x-2 text-blue-600 mb-6 hover:text-blue-800 transition-all">
          <FaArrowLeft />
          <span className="font-semibold">Back to Home</span>
        </button>
      </Link>

      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Apply for Wholesale Account
      </h2>

      <p className="mb-6 text-gray-600">
        Welcome to Deals Supply LLC, your premier destination for high-quality
        products and exceptional service. We cater exclusively to retail
        companies and charitable organizations with valid Federal Employer
        Identification Numbers (FEIN)/Tax IDs and the necessary seller&apos;s
        permit.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={wholesaleDetails.firstName}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 shadow-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-600"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={wholesaleDetails.lastName}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 shadow-sm"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-600"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={wholesaleDetails.companyName}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 shadow-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="address1"
            className="block text-sm font-medium text-gray-600"
          >
            Address 1
          </label>
          <input
            type="text"
            id="address1"
            name="address1"
            value={wholesaleDetails.address1}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 shadow-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="address2"
            className="block text-sm font-medium text-gray-600"
          >
            Address 2
          </label>
          <input
            type="text"
            id="address2"
            name="address2"
            value={wholesaleDetails.address2}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 shadow-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-600"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={wholesaleDetails.country}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 shadow-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-600"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={wholesaleDetails.state}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 shadow-sm"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-600"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={wholesaleDetails.city}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 shadow-sm"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={wholesaleDetails.email}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 shadow-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={wholesaleDetails.phone}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 shadow-sm"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="sellerPermit"
            className="block text-sm font-medium text-gray-600"
          >
            Upload Seller&apos;s Permit
          </label>
          <input
            type="file"
            id="sellerPermit"
            name="sellerPermit"
            onChange={handleFileChange}
            className="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 shadow-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={wholesaleDetails.password}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 shadow-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default ApplyWholesale;
