
import Image from "next/image";
import React from "react";

const TestimonialsSection = () => {
  return (
    <div className="py-16 bg-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Customer Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto">
          {/* Testimonial Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                orci ac lorem accumsan tristique. Nullam ac tortor a sem tempor
                faucibus id quis ipsum.
              </p>
              <div className="flex items-center mb-4">
                <Image
                  src={"/images/people/group-image.avif"}
                  alt="User"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    John Doe
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    CEO, Company Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat for more testimonials */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
