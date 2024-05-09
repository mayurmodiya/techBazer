import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function HeroBannerTwo() {

  // get banner data to from server then display here

  return (
    <section className=" bg-gradient-to-r from-gray-500 to-gray-800 text-white">
      <div className="max-w-screen-2xl mx-auto relative overflow-hidden py-16">
        {/* Animated Sparkles */}
        <div className="absolute right-48 top-28 flex items-center justify-center pointer-events-none">
          <div className="absolute w-64 h-64 bg-yellow-400 rounded-full animate-blob1"></div>
          <div className="absolute w-64 h-64 bg-red-400 rounded-full animate-blob2"></div>
          <div className="absolute w-64 h-64 bg-blue-400 rounded-full animate-blob3"></div>
        </div>
        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="lg:w-1/2 lg:mr-8 text-center md:text-start">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
                Discover the Latest in Tech
              </h1>
              <p className="text-lg lg:text-xl mb-8">
                Explore our wide range of gadgets and electronics
              </p>
              <div className="flex items-center justify-center md:justify-start">
                <Link href={`/shop`} className="bg-blue-500 hover:bg-blue-600 text-lg text-white py-4 px-10 rounded-full flex items-center gap-2">
                  <ArrowRight /> Shop Now
                </Link>
              </div>
            </div>
            <div className="relative h-[20rem] md:h-[30rem] w-full lg:mt-0">
              <Image
                src={"/images/products/peco-m6-removebg-preview.png"}
                alt="Tech Gadgets"
                fill
                className="w-full rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBannerTwo;
