import { blogPosts } from '@/data/blog/blogData'
import Image from 'next/image'
import React from 'react'

const LatestBlogPosts = () => {
  return (
    <div className="py-16 bg-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto gap-6">
        {/* Blog Post Card */}
        {blogPosts.slice(0,3).map(blog => (
            <div key={blog.title} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
            <div className='relative h-[16rem] w-full '>
            <Image src={blog.image || ''} alt="Blog Post" fill className="w-full h-64 object-contain p-4" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{blog.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{blog.excerpt}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4">Read More</button>
            </div>
          </div>
        ))}
        {/* Repeat for more blog posts */}
      </div>
    </div>
  </div>
  )
}

export default LatestBlogPosts