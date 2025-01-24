"use client"
import React, { useState } from "react";


const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqList = [
    {
      question: "Who can buy from your website?",
      answer:
        "Our services are for businesses, Amazon FBA sellers, and wholesale buyers in the U.S.",
    },
    {
      question: "How do I register as a buyer?",
      answer:
        "Sign up with over Apply Wholesale Form Amazon FBA Suppliers with your business details, including a valid resale certificate or tax ID.",
    },
    {
      question: "What products do you offer?",
      answer:
        "We provide a variety of wholesale products, including electronics, home goods, and more.",
    },
    {
      question: "Do you offer FBA prep services?",
      answer:
        "Yes, we handle labeling, bundling, and packaging for Amazon FBA compliance.",
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, contact us to discuss volume pricing for large orders.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept ACH & WIRE Through secure payment options.",
    },
    {
      question: "Can you ship directly to Amazon warehouses?",
      answer: "Yes, we can ship directly to Amazon FBA fulfillments centers.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Orders typically ship within 2�3 business days, with delivery times varying by location.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns for defective or damaged items within 14 days.",
    },
    {
      question: "How can I contact support?",
      answer:
        "Email us at info@dealssupplyllc.com or use our contact form also visit over website https://www.dealssupplyllc.com/.",
    },
  ];

  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqList.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span
                  className={`transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-gray-600"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
              {openIndex === index && (
                <div className="p-6 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
