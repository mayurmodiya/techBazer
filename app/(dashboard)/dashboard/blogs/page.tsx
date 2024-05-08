import BlogActions from "@/components/dashboard/blog/BlogActions";
import SearchBlogs from "@/components/dashboard/blog/SearchBlogs";
import Pagination from "@/components/others/Pagination";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  // Dummy blog data for demonstration
  const blogs = [
    {
      id: 1,
      title: "Introduction to React",
      author: "John Doe",
      date: "April 20, 2024",
      imageUrl: "/iamges/blog-1.png",
      description:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae esse excepturi, eveniet quia ex eligendi vel est necessitatibus laudantium hic explicabo omnis placeat consectetur aperiam porro rem blanditiis ipsum.",
    },
    {
      id: 2,
      title: "Getting Started with Tailwind CSS",
      author: "Jane Smith",
      date: "April 22, 2024",
      imageUrl: "/images/blog-2.png",
      description:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae esse excepturi, eveniet quia ex eligendi vel est necessitatibus laudantium hic explicabo omnis placeat consectetur aperiam porro rem blanditiis ipsum.",
    },
  ];

  return (
    <div className="max-w-screen-2xl w-full my-4 mx-auto p-4">
      <div className="flex justify-between mb-6 gap-2">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Blogs
        </h2>
        <div className="flex items-center gap-4">
          <SearchBlogs />
          <Link
            href={"/dashboard/blogs/add-blog"}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded-lg whitespace-nowrap"
          >
            Create Blog
          </Link>
        </div>
      </div>
      <div className="">
        {/* Render list of blogs */}
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4 flex gap-2"
          >
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              width={96}
              height={96}
              className="w-24 h-24 object-cover rounded-md mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {blog.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Author:</span> {blog.author} |{" "}
                <span className="font-semibold">Date:</span> {blog.date}
              </p>
              <p>{blog.description.slice(0, 100)}</p>
            </div>
            <div className="ml-auto">
              <BlogActions />
            </div>
          </div>
        ))}
      </div>
      <Pagination currentPage={1} totalPages={5} pageName="blogpage"/>
    </div>
  );
};

export default BlogsPage;