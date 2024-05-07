import BannerActions from '@/components/dashboard/banner/BannerActions';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BannerPage = () => {
  // Sample banner data
  const banners = [
    {
      id: 1,
      title: 'Welcome to Our Store',
      description: 'Discover amazing deals on a wide range of products.',
      buttonText: 'Shop Now',
      buttonLink: '/shop',
      image: '/banner-image-1.jpg',
    },
    {
      id: 2,
      title: 'New Arrivals',
      description: 'Explore our latest collection of products.',
      buttonText: 'View Now',
      buttonLink: '/new-arrivals',
      image: '/banner-image-2.jpg',
    },
    // Add more banners as needed
  ];

  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen w-full my-4 rounded-md">
      <div className="max-w-screen-2xl w-full mx-auto px-4 py-6">
        <div className='flex items-center justify-between mb-6'>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white ">Manage Banners</h1>
        <div className="flex justify-end">
          <Link href={'/dashboard/banners/add-banner'} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg">Add Banner</Link>
        </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {banners.map((banner) => (
            <div key={banner.id} className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
              <div className='relative w-full h-[16rem]'>
              <Image src={banner.image} fill alt={banner.title} className="w-full h-64 object-cover" />
              </div>
              <div className="p-6">
               <div className='flex items-center justify-between gap-2'>
               <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{banner.title}</h2>
               <BannerActions />
               </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{banner.description}</p>
                <a href={banner.buttonLink} className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">{banner.buttonText}</a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default BannerPage;
