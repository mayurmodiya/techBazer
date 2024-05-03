import Image from "next/image";
import React from "react";

function HeroBannerTwo() {
  return (
    <section className=" bg-gray-600 text-white">
      <div className="max-w-screen-2xl mx-auto relative overflow-hidden py-16 ">
      {/* Animated Sparkles */}
      <div className="absolute right-20 top-10 flex items-center justify-center pointer-events-none">
        <div className="absolute w-64 h-64 bg-yellow-400 rounded-full animate-blob1"></div>
        <div className="absolute w-64 h-64 bg-red-400 rounded-full animate-blob2"></div>
        <div className="absolute w-64 h-64 bg-blue-400 rounded-full animate-blob3"></div>
      </div>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:mr-8">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 ">
              Discover the Latest in Tech
            </h1>
            <p className="text-lg lg:text-xl mb-8">
              Explore our wide range of gadgets and electronics
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg">
              Shop Now
            </button>
          </div>
          <div className="relative h-[25rem] w-full mt-8 lg:mt-0">
            <Image
              src={"/images/category/headphone.png"}
              alt="Tech Gadgets"
              fill
              className="w-full rounded-lg  object-contain"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default HeroBannerTwo;
