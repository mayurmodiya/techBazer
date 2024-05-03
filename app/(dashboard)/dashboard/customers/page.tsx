import Image from "next/image";
import React, { useState } from "react";

const CustomersPage = () => {
  // Dummy data for demonstration
  const dummyCustomers = [
    { 
      id: 1, 
      name: "John Doe", 
      email: "john@example.com", 
      phone: "1234567890", 
      address: "123 Main St, Anytown, USA", 
      image: "/iamges/customer-1.png", // URL to customer image 
    },
    { 
      id: 2, 
      name: "Jane Smith", 
      email: "jane@example.com", 
      phone: "9876543210", 
      address: "456 Elm St, Othertown, USA", 
      image: "/images/customer-2.png", // URL to customer image 
    },
    // Add more customer data as needed
  ];

  return (
    <div className="max-w-screen-2xl w-full p-4 my-4 mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Customers
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
            {dummyCustomers.map((customer) => (
              <tr key={customer.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.address}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Image width={40} height={40} src={customer.image} alt={customer.name} className="h-10 w-10 rounded-full" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersPage;
