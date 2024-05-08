import OrderActions from "@/components/dashboard/order/OrderActions";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const Separator = () => {
  return (
    <hr className="my-6 border-t border-gray-300 dark:border-gray-600" />
  );
};

const OrderDetails = () => {
  // get order data based on orderId from the params here
  const order = {
    orderNumber: "ORD123456",
    customerName: "John Doe",
    date: "2024-04-01",
    status: "Shipped",
    shippingAddress: "123 Main Street",
    city: "New York",
    country: "USA",
    products: [
      {
        id: 1,
        name: "Iphone Titanium 15 Pro Max",
        price: 50,
        quantity: 2,
        image: "/images/products/iphone-15-2.png",
      },
      {
        id: 2,
        name: "Iphone Titanium 15 Pro Max",
        price: 50,
        quantity: 2,
        image: "/images/products/iphone-15-2.png",
      },
    ],
    total: 190,
  };

  return (
    <div className="max-w-screen-2xl w-full mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 my-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Order Details
      </h2>

      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Order Information
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Order Number: {order.orderNumber}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Customer Name: {order.customerName}
          </p>
          <p className="text-gray-700 dark:text-gray-300">Date: {order.date}</p>
          <p className="text-gray-700 dark:text-gray-300">
            Status:{" "}
            <span
              className={`inline-flex text-sm font-semibold rounded-full px-2 ${
                order.status === "Shipped"
                  ? "bg-green-100 text-green-800"
                  : order.status === "Pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {order.status}
            </span>
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Shipping Information
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Address: {order.shippingAddress}
          </p>
          <p className="text-gray-700 dark:text-gray-300">City: {order.city}</p>
          <p className="text-gray-700 dark:text-gray-300">
            Country: {order.country}
          </p>
        </div>
      </div>
      <Separator />
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
         Order Products
        </h3>
        <ul className=" dark:divide-gray-700 my-4 space-y-2">
          {order.products.map((product) => (
            <li key={product.id} className="">
              <div className="flex justify-between items-center !border dark:border-gray-500 px-2 rounded-md ">
                <p className="text-gray-900 dark:text-white">{product.name}</p>
                <Image src={product.image} alt="product image" width={80} height={80}/>
                <p className="text-gray-700 dark:text-gray-300">
                  Qty : {product.quantity}
                </p>
                <p>Price : {product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Total : 
        </h3>
        <p className="text-xl font-bold text-gray-900 dark:text-white">
          ${order.total}
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;