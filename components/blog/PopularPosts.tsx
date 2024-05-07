import React from "react";

const PopularPosts = () => {
  // Sample popular posts data
  const popularPosts = [
    {
      id: 1,
      title: "Popular Post 1",
      author: "John Doe",
      date: "April 15, 2024",
    },
    {
      id: 2,
      title: "Popular Post 2",
      author: "Jane Smith",
      date: "April 10, 2024",
    },
    // Add more popular posts as needed
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Popular Posts
        </h2>
        <ul className="space-y-4">
          {popularPosts.map((post) => (
            <li key={post.id} className="flex items-center space-x-2">
              <span className="text-gray-600 dark:text-gray-300">
                {post.date}
              </span>
              <span className="text-gray-900 dark:text-white">
                {post.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularPosts;
