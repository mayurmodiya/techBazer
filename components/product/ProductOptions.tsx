import { Eye, Heart, ShoppingBag } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useCartStore from "@/store/cartStore";
import useWishlistStore from "@/store/wishlistStore";
import { showToast } from "@/lib/showToast";
import { Product } from "@/types";
import { useProductQuickViewStore } from "@/store/productQuickViewStore";

const ProductOptions = ({ product }: { product: Product }) => {
  const { openModal } = useProductQuickViewStore();
  const { images, name } = product;

  const { addToCart } = useCartStore();
  const { addToWishlist } = useWishlistStore();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1, selectedColor: "" });
    showToast("Item Added To Cart", images[0], name);
  };

  const handleAddToWishList = () => {
    addToWishlist(product);
    showToast("Item Added To Wishlist", images[0], name);
  };

  const handleProductQuickView = () => {
    openModal(product);
  };

  return (
    <div
      className="flex items-center flex-col gap-2"
      onClick={(e) => e.preventDefault()}
    >
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant={"outline"}
              onClick={handleAddToWishList}
              className="p-2 rounded-lg mr-1"
            >
              <Heart />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add To Wishlist</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Button
              onClick={handleProductQuickView}
              variant={"outline"}
              className="p-2 rounded-lg mr-1"
            >
              <Eye />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Quick View</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Button
              onClick={handleAddToCart}
              variant={"outline"}
              className="p-2 rounded-lg mr-1"
            >
              <ShoppingBag />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add To Cart</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ProductOptions;
