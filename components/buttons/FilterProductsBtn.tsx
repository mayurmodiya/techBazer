"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import FilterProducts from "../products/FilterProducts";
import { Filter } from "lucide-react";

const FilterProductsBtn = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="text-lg flex items-center gap-2 bg-black rounded-md dark:bg-white py-2 px-6 dark:text-black text-white">
          <Filter /> Filter
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll">
            <FilterProducts />
      </SheetContent>
    </Sheet>
  );
};

export default FilterProductsBtn;
