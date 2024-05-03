
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { colors } from "@/data/products/productColor";
import { cn } from "@/lib/utils";

interface ProductColorSelectionProps {
  color: string;
  setColor: (value: string) => void;
}

const ProductColorSelection = ({
  color: selectedColor,
  setColor,
}: ProductColorSelectionProps) => {
  return (
    <div className="!mt-4">
      <p className="text-lg  mb-1">Colors :</p>
      <div className="space-x-2">
        <TooltipProvider delayDuration={0}>
          {colors.map((color) => (
            <Tooltip key={color}>
              <TooltipTrigger>
                <span
                  onClick={() => setColor(color as string)}
                  className={cn(
                    "block w-14 h-8 rounded-full border border-spacing-4 opacity-80  hover:scale-10 duration-200",
                    selectedColor === color ? "scale-125" : "scale-100"
                  )}
                  style={{ backgroundColor: color }}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{color}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default ProductColorSelection;
