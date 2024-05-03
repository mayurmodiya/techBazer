'use client'
import React, { useState } from 'react';

const ProductAddPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    brand: '',
    type: '',
    description: '',
    aboutItem: [],
    image: null, // Added image field
  });

  const handleChange = (e:any) => {
    const { name, value, files } = e.target;
    // If it's a file input, store the File object in state
    if (name === 'image') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Assuming single image upload
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., API call to add product)
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      price: '',
      category: '',
      brand: '',
      type: '',
      description: '',
      aboutItem: [],
      image: null,
    });
  };

  return (
    <div className="max-w-screen-2xl mx-auto w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 my-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
      <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">Product Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-white">Price</label>
          <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-white">Category</label>
          <select id="category" name="category" value={formData.category} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500">
            <option value="">Select category</option>
            {/* Add options for categories */}
          </select>
        </div>
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700 dark:text-white">Brand</label>
          <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-white">Type</label>
          <input type="text" id="type" name="type" value={formData.type} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-white">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>
        <div>
          <label htmlFor="aboutItem" className="block text-sm font-medium text-gray-700 dark:text-white">About Item</label>
          <input type="text" id="aboutItem" name="aboutItem" value={formData.aboutItem} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500" />
          {/* Add logic to allow adding multiple items */}
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-white">Product Image</label>
          <input type="file" id="image" name="image" accept="image/*" onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">Add Product</button>
      </form>
    </div>
  );
};

export default ProductAddPage;
