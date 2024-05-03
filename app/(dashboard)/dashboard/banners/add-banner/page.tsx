'use client'
import React, { useState } from "react";

const BannerForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    buttonText: "",
    buttonLink: "",
    image: "",
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
    console.log(formData);
    // Reset form fields
    setFormData({
      title: "",
      description: "",
      buttonText: "",
      buttonLink: "",
      image: "",
    });
  };

  return (
    <div className="max-w-screen-2xl w-full mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 my-4">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Add Banner
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
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="buttonText"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Button Text
          </label>
          <input
            type="text"
            id="buttonText"
            name="buttonText"
            value={formData.buttonText}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="buttonLink"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Button Link
          </label>
          <input
            type="text"
            id="buttonLink"
            name="buttonLink"
            value={formData.buttonLink}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Add Banner
        </button>
      </form>
    </div>
  );
};

export default BannerForm;
