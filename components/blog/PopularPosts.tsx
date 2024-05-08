import { blogPosts } from "@/data/blog/blogData";
import Link from "next/link";
import React from "react";

const PopularPosts = () => {

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Popular Posts
        </h2>
        <ul className="space-y-4">
          {blogPosts.map((post) => (
            <li key={post.title} className="flex items-center space-x-2">
              <Link href={`/blog/${post.title}`} className="text-gray-900 dark:text-white text-lg font-medium block hover:opacity-60 ">
                {post.title}
              </Link>
              <small className="text-gray-600 dark:text-gray-300 block">
                {post.date?.toDateString()}
              </small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularPosts;
