import React from "react";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-screen-lg mx-auto">
        {/* Contact Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reach out to Deals Supply LLC for any inquiries, assistance, or
            information related to Amazon FBA wholesale supply.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Whether you’re looking for more information about our services or
              have any questions, feel free to contact us using the details
              below.
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-lg text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12V8l4-4m0 0l-4-4M16 4l-4 4m4-4H4m8 16h4a2 2 0 002-2V4H4a2 2 0 00-2 2v12a2 2 0 002 2h8z"
                  />
                </svg>
                <p className="font-medium">
                  Phone: <span className="text-gray-900">817-660-8846</span>
                </p>
              </div>

              <div className="flex items-center text-lg text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12V8l4-4m0 0l-4-4M16 4l-4 4m4-4H4m8 16h4a2 2 0 002-2V4H4a2 2 0 00-2 2v12a2 2 0 002 2h8z"
                  />
                </svg>
                <p className="font-medium">
                  Email:{" "}
                  <span className="text-gray-900">info@dealssupplyllc.com</span>
                </p>
              </div>

              <div className="flex items-center text-lg text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2 2 4-4 4 4 4-4 2 2M12 3v9"
                  />
                </svg>
                <p className="font-medium">
                  Address:{" "}
                  <span className="text-gray-900">
                    12610 Executive Dr, Stafford, TX 77477, United States
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Get In Touch
            </h2>
            <form className="space-y-6 bg-white shadow-lg p-8 rounded-xl border border-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-lg text-gray-800 mb-2"
                    htmlFor="name"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    className="block text-lg text-gray-800 mb-2"
                    htmlFor="email"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-lg text-gray-800 mb-2"
                  htmlFor="subject"
                >
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label
                  className="block text-lg text-gray-800 mb-2"
                  htmlFor="message"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={6}
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
