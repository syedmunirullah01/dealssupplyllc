import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link"; // Import Link for internal navigation

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {/* Column 1: Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/images/logo.jpg" // Add your logo here
              alt="Logo"
              className="w-48 h-auto"
            />
          </div>
          <p className="text-sm">
            Welcome to our website! We offer high-quality products at
            competitive prices. Enjoy your shopping experience with us.
          </p>
        </div>

        {/* Column 2: Information Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/sitemap" className="hover:text-blue-600">
                Sitemap
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-600">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-start">
              <FaMapMarkerAlt className="mr-3 text-xl text-blue-500" />
              <span>12610 Executive Dr, Stafford, TX 77477, United States</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="mr-3 text-xl text-blue-500" />
              <span>Phone: 817-660-8846</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-3 text-xl text-blue-500" />
              <span>Email: support@example.com</span>
            </div>
          </div>
        </div>

        {/* Column 4: Subscribe Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Subscribe Us</h3>
          <p className="text-sm mb-4">
            Stay updated with our latest news and offers. Subscribe to our
            newsletter.
          </p>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 text-center">
        <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
        <div className="flex justify-center space-x-6">
          <Link href="https://facebook.com" className="hover:text-blue-600">
            <FaFacebook className="text-2xl" />
          </Link>
          <Link href="https://twitter.com" className="hover:text-blue-400">
            <FaTwitter className="text-2xl" />
          </Link>
          <Link href="https://instagram.com" className="hover:text-pink-500">
            <FaInstagram className="text-2xl" />
          </Link>
          <Link href="https://linkedin.com" className="hover:text-blue-700">
            <FaLinkedin className="text-2xl" />
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-600 border-t border-gray-300 pt-4">
        &copy; {new Date().getFullYear()} Your Company Name. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
