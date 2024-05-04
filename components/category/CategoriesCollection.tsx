'use client'
import { categories } from "@/data/category/categoryData";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";

const CategoriesCollection = () => {

const router = useRouter();
const searchParams = useSearchParams();


  // get categories from server here
  const data = categories;


  const handleCollectionClick = (collectionName:string) => {
    const params = new URLSearchParams();
    params.set("category", collectionName);
    router.push(`shop?${params.toString()}`);
  };


  return (
    <section className="px-4 md:px-8 py-16 bg-slate-200 dark:bg-slate-800 ">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-wrap">
        {data.slice(0, 3).map((item) => (
          <div
            onClick={() => handleCollectionClick(item.name)}
            key={item.name}
            className="flex flex-col gap-4 items-start justify-between p-4 md:p-8 rounded-xl bg-white dark:bg-slate-700 shadow-md"
          >
            <h2 className="text-xl md:text-2xl text-center font-bold my-4 w-full">
              Get 20% off on {item.name}
            </h2>
            <div className="grid grid-cols-2 gap-4 place-content-center w-full">
              <div className="flex flex-col items-center justify-center text-center gap-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-contain rounded-md"
                />
                <div className="flex items-center flex-col">
                  <p className="bg-rose-600 p-1 text-sm text-white whitespace-nowrap w-fit">
                    15% off
                  </p>
                  <p className=" font-semibold">
                    {item.name}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-cover rounded-md"
                />
                <div className="flex items-center flex-col">
                  <p className="bg-rose-600 p-1 text-sm text-white whitespace-nowrap">
                    15% off
                  </p>
                  <p className="font-semibold">
                    {item.name}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-cover rounded-md"
                />
                <div className="flex items-center flex-col">
                  <p
                    className="bg-rose-600 p-1 te
                    xt-sm text-white whitespace-nowrap"
                  >
                    15% off
                  </p>
                  <p className="font-semibold">
                    {item.name}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-cover rounded-md"
                />
                <div className="flex items-center flex-col">
                  <p className="bg-rose-600 p-1 text-sm text-white whitespace-nowrap">
                    15% off
                  </p>
                  <p className=" font-semibold">
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
            <Button
              className="mt-4 flex items-center gap-4 text-lg font-semibold w-full"
              variant={"outline"}
              size={"lg"}
            >
              <ArrowRight /> Collections
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesCollection;
