import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  // Sample category data
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image: "/electronics.jpg",
      description: "Browse our latest electronics collection.",
    },
    {
      id: 2,
      name: "Clothing",
      image: "/clothing.jpg",
      description: "Discover the trendiest clothing styles.",
    },
    {
      id: 3,
      name: "Home Appliances",
      image: "/home-appliances.jpg",
      description: "Explore our range of home appliances.",
    },
    // Add more categories as needed
  ];

  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Browse Categories
        </h1>
        <Link href={'/dashboard/categories/add-category'}>Add Category</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative w-full h-[16rem]">
                <Image
                  src={category.image}
                  fill
                  alt={category.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.name}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {category.description}
                </p>
                <div className="mt-4 flex space-x-4">
                  {/* Horizontal icons */}
                  <span className="text-gray-500 dark:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 6L9 17l-5-5"
                      />
                    </svg>
                  </span>
                  {/* Add more icons as needed */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
