import { blogPosts } from "@/data/blog/blogData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import RecentBlogs from "../../blog/RecentBlogs";

const BlogPageOne = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-2 md:p-4 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 ">
      <div className="col-span-3 space-y-2">
        {blogPosts.map((blog) => (
          <Link
            key={blog.title}
            href={`blog/${blog.title}`}
            className="block space-y-2 rounded-md shadow p-4 text-left"
          >
            <div className="relative w-full h-[20rem]">
              <Image
                className="rounded-md object-contain"
                src={blog.image || ""}
                alt="blog image"
                fill
              />
            </div>
            <div>
              <p className="bg-lime-500 w-fit px-4 py-1 rounded-full">
                {blog.category}
              </p>
              <h2 className="text-2xl md:text-4xl my-2 font-bold capitalize">
                {blog.title}
              </h2>
              <div className="text-sm md:text-xl font-medium flex items-center gap-2 text-blue-500">
                <span className="hidden md:block">Written By</span>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>Pic</AvatarFallback>
                </Avatar>{" "}
                {blog.author}
              </div>
            </div>
            <div>{blog.content.slice(0,300)}... <span className="text-gray-900 dark:text-gray-100 underline">Read More</span></div>
          </Link>
        ))}
      </div>
      <RecentBlogs />
    </div>
  );
};

export default BlogPageOne;
