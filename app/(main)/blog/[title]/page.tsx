import BreadcrumbComponent from "@/components/others/Breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { blogPosts } from "@/data/blog/blogData";
import Image from "next/image";
import React from "react";
import PopularPosts from "@/components/blog/PopularPosts";
import AboutMe from "@/components/blog/AboutMe";
import NewsLetterTwo from "@/components/newsLetter/NewsLetterTwo";

const BlogTitlePage = ({ params }: { params: { title: string } }) => {
  const title = params.title.split("%20").join(" ");
  const blog = blogPosts.find((item) => item.title === title);

  return (
    <section>
      <div className="max-w-screen-2xl mx-auto p-4 md:p-12">
        <BreadcrumbComponent
          links={["/blog"]}
          pageText={blog?.title as string}
        />
        {/* blog details  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          <div className="space-y-2 lg:col-span-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold capitalize">
                {blog?.title}
              </h2>
              <div className="text-sm md:text-lg flex items-center gap-2 mt-2 text-blue-500">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>Pic</AvatarFallback>
                </Avatar>{" "}
                {blog?.author}
              </div>
            </div>
            <div className="relative w-full h-[30rem] p-4">
              <Image
                className="rounded-md object-contain "
                src={blog?.image || ""}
                alt="blog image"
                fill
              />
            </div>

            <div className="py-4">
              <p className="text-xl leading-9">{blog?.content}</p>
            </div>
          </div>
          <div className="lg:col-span-1 space-y-4">
            <PopularPosts />
            <AboutMe />
          </div>
        </div>
      </div>
        <div>
          <NewsLetterTwo />
        </div>
    </section>
  );
};

export default BlogTitlePage;
