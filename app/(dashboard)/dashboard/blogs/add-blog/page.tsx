
'use client'
import React, { useState } from "react";

const AddBlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: "",
    imageUrl: "",
    excerpt: "",
    content: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log("Blog submitted:", formData);
    // Reset form fields
    setFormData({
      title: "",
      author: "",
      date: "",
      imageUrl: "",
      excerpt: "",
      content: "",
    });
  };

  return (
    <div className="max-w-screen-2xl w-full mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 my-4">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Add Blog
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Date
          </label>
          <input
            type="text"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="excerpt"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Excerpt
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlogForm;
