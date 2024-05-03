import { categories } from '@/data/category/categoryData'
import Image from 'next/image'
import React from 'react'

const CategorySectionTwo = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-800">
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">Featured Categories</h2>
      <div className="flex items-center gap-8 overflow-x-auto">
        {/* Category Card */}
        {categories.map(category => (
            <div key={category.name} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden min-w-[20rem] shadow-lg">
            <div className='relative w-full  h-[16rem]'>
            <Image src={category.image} alt="Category" fill className="w-full h-64 object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{category.name}</h3>
              <p className="text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel est dui.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4">View Products</button>
            </div>
          </div>
        ))}
        {/* Repeat for more categories */}
      </div>
    </div>
  </div>
  )
}

export default CategorySectionTwo