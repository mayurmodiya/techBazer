import React from "react";
import { Separator } from "../ui/separator";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white py-8 px-4 md:px-8">
      <div className="max-w-screen-2xl mx-auto p-2 md:p-4 container flex md:flex-row  flex-wrap gap-2 justify-between">
        <div className="flex flex-col space-y-4 mb-8 md:mb-0">
          <h3 className="text-xl font-semibold">TechBazer</h3>
          <p>Your one-stop shop for all things electronics.</p>
          <div className="flex space-x-4">
            <Link
              href="www.facebook.com"
              className=""
            >
              <FaFacebook size={30}/>
            </Link>
            <Link
              href="www.x.com"
              className=""
            >
              <FaTwitter size={30}/>
            </Link>
            <Link
              href="www.instagram.com"
              className=""
            >
              <FaInstagramSquare size={30}/>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Categories</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className=""
              >
                Computers & Laptops
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=""
              >
               Smartphone & phones 
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=""
              >
                Tv & Home Appliances
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=""
              >
                Audio & Headphones
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className=""
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=""
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=""
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=""
              >
                Shop
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className=""
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=""
              >
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=""
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=""
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Separator />
      <div className="text-center mt-8">
        <p>&copy; 2024 Your Brand Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
