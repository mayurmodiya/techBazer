import React from 'react'
import { Input } from '../ui/input';


const FilterProductsTwo = () => {
    const categories = ['Electronics', 'Gadgets', 'Accessories'];
    const brands = ['Brand 1', 'Brand 2', 'Brand 3'];
    const colors = ['white', 'black', 'gray','blue','rose']


    return (
      <div className="bg-white dark:bg-gray-800 py-6 px-4 sm:px-6 lg:px-8 shadow-md rounded-md my-2">
        <div className="max-w-7xl mx-auto flex flex-wrap flex-col sm:flex-row items-center justify-start gap-4">
          {/* Category Filter */}
          <h2 className='text-xl font-semibold'>Filter Products By |</h2>

          <div className="flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <span className="text-gray-600 dark:text-gray-300">Category:</span>
            <div className="relative">
              <select className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Brand Filter */}
          <div className="flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <span className="text-gray-600 dark:text-gray-300">Brand:</span>
            <div className="relative">
              <select className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Brands</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>

            </div>
          </div>

           {/* Color Filter */}
           <div className="flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <span className="text-gray-600 dark:text-gray-300">Colors:</span>
            <div className="relative">
              <select className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Colors</option>
                {colors.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>

            </div>
          </div>

          {/* Price Range Filter */}
          <div className="flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <span className="text-gray-600 dark:text-gray-300">Price Range:</span>
            <div className="relative flex items-center gap-2">
              <Input type='range'/>
              <span>$2000</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default FilterProductsTwo