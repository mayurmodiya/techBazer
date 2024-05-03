import { productsData } from "@/data/products/productsData";
import Image from "next/image";
import React from "react";

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.slice(0,4).map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative w-full h-64">
                <Image
                  src={product.images[0]}
                  fill
                  alt="Product"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {product.category}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-900 dark:text-white font-bold">
                    ${product.price}
                  </p>
                  <button className="bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* Repeat for more featured products */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
