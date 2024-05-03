import Image from 'next/image';
import React from 'react';

const MyOrdersPage = () => {
  return (
    <div className="px-4 py-8 lg:px-16 lg:py-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-8">
          My Orders
        </h1>
        <div className="space-y-8">
          {/* Order Item */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Order #12345</h2>
              <p className="text-gray-700 dark:text-gray-300">Date: MM/DD/YYYY</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-700 dark:text-gray-300">Total: $XX.XX</p>
              <p className="text-gray-700 dark:text-gray-300">Status: Shipped</p>
            </div>
            {/* Display order items */}
            {/* You can map over items in the order and display them here */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <Image src="/product-image.jpg" alt="Product" width={64} height={64} className="w-16 h-16 object-cover rounded-lg" />
                <div className="ml-4">
                  <p className="text-gray-800 dark:text-white">Product Name</p>
                  <p className="text-gray-700 dark:text-gray-300">Quantity: 1</p>
                </div>
              </div>
              {/* Repeat above structure for more items */}
            </div>
          </div>
          {/* Repeat above structure for more orders */}
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;
