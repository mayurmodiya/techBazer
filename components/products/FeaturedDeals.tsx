import Image from 'next/image'
import React from 'react'

const FeaturedDeals = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-800">
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">Featured Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Deal Card */}
        <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
          <div className='relative w-full h-[16rem]'>
          <Image src="/deal1.jpg" alt="Deal" fill className="w-full h-64 object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Deal Title</h3>
            <p className="text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel est dui.</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-900 dark:text-white font-bold">$XX.XX</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Shop Now</button>
            </div>
          </div>
        </div>
        {/* Repeat for more deals */}
      </div>
    </div>
  </div>
  )
}

export default FeaturedDeals