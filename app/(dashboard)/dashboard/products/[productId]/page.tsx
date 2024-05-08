import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const ProductDetailsPage = () => {
  // Sample product data
  const product = {
    id: 1,
    name: 'Product Name',
    price: '$100',
    category: 'Electronics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper bibendum sem, non fermentum velit blandit et.',
    images: ['/images/products/iphone-15-2.png', '/images/products/iphone-15-2.png', '/images/products/iphone-15-2.png'], // Array of product images
    color: ['Red', 'Blue', 'Green'], // Array of available colors
    stock: 10,
    rating: 4.5,
    reviews: [
      { id: 1, text: 'Great product!', author: 'User1', date: '2024-04-01' },
      { id: 2, text: 'Amazing quality!', author: 'User2', date: '2024-04-02' },
      { id: 3, text: 'Highly recommend!', author: 'User3', date: '2024-04-03' },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center md:justify-start">
          <Image src={product.images[0]} alt={product.name} width={600} height={300} className='bg-gray-200 object-contain rounded-md' />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h1>
          <p className="text-2xl text-lime-500 mb-4">{product.price}</p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Category: {product.category}</p>
          <p className="text-gray-800 dark:text-gray-200 mb-6">{product.description}</p>
          <div className="mb-6">
            <p className="text-gray-800 dark:text-gray-200 mb-2">Available Colors:</p>
            <div className="flex space-x-2">
              {product.color.map((color, index) => (
                <div key={index} className={`w-6 h-6 rounded-full ${color.toLowerCase()}`} title={color}></div>
              ))}
            </div>
          </div>
          <p className="text-gray-800 dark:text-gray-200 mb-6">Stock: {product.stock}</p>
          <div className="mb-6">
            <p className="text-gray-800 dark:text-gray-200 mb-2">Product Images:</p>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <div key={index} className="w-24 h-24 relative">
                  <Image src={image} alt={`${product.name}-image-${index}`} fill className='border p-2' />
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-800 dark:text-gray-200 mb-6">Average Rating: {product.rating}</p>
          <div className="mb-6">
            <p className="text-gray-800 dark:text-gray-200 mb-2">Reviews:</p>
            <ul>
              {product.reviews.map((review) => (
                <li key={review.id} className="mb-2">
                  <p className="text-gray-800 dark:text-gray-200">{review.text}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">- {review.author}, {review.date}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-4">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
              Edit Product
            </Button>
            <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg">
              Delete Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
