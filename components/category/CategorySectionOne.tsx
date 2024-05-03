import { categories } from "@/data/category/categoryData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategorySectionOne = () => {
  return (
    <section className="py-16 bg-slate-300 dark:bg-slate-900">
      <div className="flex items-center flex-col md:flex-row gap-4 max-w-screen-2xl mx-auto overflow-auto px-4 md:px-8">
      {categories.map((category) => (
        <Link
          href={category.link}
          key={category.link}
          className=" p-4 rounded-md shadow-md w-full flex items-center gap-4 bg-gray-100 dark:bg-gray-800"
        >
          <div className="relative w-[5rem] h-[5rem]">
            <Image className="object-cover" src={category.image} fill alt={category.name} />
          </div>
          <p className="text-lg font-medium hover:underline">{category.name}</p>
        </Link>
      ))}
    </div>
    </section>
  );
};

export default CategorySectionOne;
