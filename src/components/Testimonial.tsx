import React from "react";
import Image from "next/image"; // Import Image from next/image

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      image: "/images/t1.jpg",
      rating: 5,
      feedback:
        "Great quality products! The shipping was fast, and customer service was fantastic.",
    },
    {
      name: "Jane Smith",
      image: "/images/t2.jpg",
      rating: 4,
      feedback:
        "I love the selection of items. The prices are a bit high, but overall, I’m satisfied.",
    },
    {
      name: "Robert Johnson",
      image: "/images/t3.jpg",
      rating: 5,
      feedback:
        "Excellent experience! The product arrived on time and exactly as described. Highly recommend!",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Customer Testimonials
        </h2>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-20 h-20 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-2 border-gray-300"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {testimonial.name}
                  </h3>
                  <div className="flex items-center text-yellow-500 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.396.28-.86-.048-.755-.5l1.104-4.39L.397 6.401c-.326-.317-.157-.857.283-.92l4.515-.627L6.835.792c.207-.41.724-.41.931 0l2.494 4.062 4.515.627c.44.063.609.603.283.92l-4.564 4.152 1.104 4.39c.105.452-.358.78-.755.5l-3.664-2.56-3.664 2.56z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
