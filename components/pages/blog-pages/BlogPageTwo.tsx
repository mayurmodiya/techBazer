import AboutMe from '@/components/blog/AboutMe';
import PopularPosts from '@/components/blog/PopularPosts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogPageTwo = () => {
  // Sample blog posts data
  const blogPosts = [
    { id: 1, title: 'Post Title 1', author: 'John Doe', date: 'April 20, 2024', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ipsum id neque laoreet tincidunt.', tags: ['Tech', 'Design'], category: 'Technology' },
    { id: 2, title: 'Post Title 2', author: 'Jane Smith', date: 'April 18, 2024', excerpt: 'Sed at faucibus urna. Duis gravida odio ac magna pharetra, nec lacinia quam blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vitae malesuada risus.', tags: ['Gadgets'], category: 'Gadgets' },
    // Add more blog posts as needed
  ];

  // Sample categories data
  const categories = ['Technology', 'Gadgets', 'Design', 'Fashion', 'Travel'];
  
  // Sample tags data
  const tags = ['Tech', 'Gadgets', 'Design', 'Fashion', 'Travel'];

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Blogs Section */}
      <div className="grid grid-cols-1 gap-8">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className='relative w-full h-48'>
            <Image src={`/blog/${post.id}.jpg`} fill alt={post.title} className="w-full h-48 object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">By {post.author} | {post.date}</p>
              <p className="text-gray-700 dark:text-gray-400">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-4">
                <Link href={`/blog/${post.title}`} className="text-blue-600 dark:text-blue-400 hover:underline">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar Section */}
      <div className="grid grid-cols-1 gap-8">
        {/* Popular Posts */}
        <PopularPosts />
        {/* About Me or Author Information */}
        <AboutMe />
        {/* Categories */}
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category} className="text-blue-600 dark:text-blue-400 hover:underline">{category}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-400 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageTwo;
