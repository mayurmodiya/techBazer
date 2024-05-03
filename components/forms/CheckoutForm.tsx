import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CheckoutForm = () => {
  return (
    <div>
      <form className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="firstName"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              First Name
            </Label>
            <Input
              type="text"
              id="firstName"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-6 focus:outline-none"
            />
          </div>
          <div>
            <Label
              htmlFor="lastName"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Last Name
            </Label>
            <Input
              type="text"
              id="lastName"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-6 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <Label
            htmlFor="address"
            className="block text-gray-700 dark:text-gray-300 mb-2"
          >
            Address
          </Label>
          <Input
            type="text"
            id="address"
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-6 focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="phone"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Phone
            </Label>
            <Input
              type="tel"
              id="phone"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-6 focus:outline-none"
            />
          </div>
          <div>
            <Label
              htmlFor="city"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              City
            </Label>
            <Input
              type="text"
              id="city"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-6 focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="zip"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              ZIP Code
            </Label>
            <Input
              type="text"
              id="zip"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-6 focus:outline-none"
            />
          </div>
          <div>
            <Label
              htmlFor="country"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Country
            </Label>
            <Input
              type="text"
              id="country"
              className="w-full p-6 border border-gray-300 dark:border-gray-700 rounded-lg  focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button size={"lg"} type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
