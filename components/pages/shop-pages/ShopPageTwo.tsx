import LatestBlogPosts from "@/components/blog/LatestBlogPosts";
import ShopPageContainer from "@/components/products/ShopPageContainer";

import React from "react";

interface ShopPageTwoProps {
  searchParams: {
    product_page: string;
    category: string;
    brand: string;
    search: string;
  };
}

const ShopPageTwo = ({ searchParams }: ShopPageTwoProps) => {
  return (
    <section className="p-4 lg:p-8">
      <ShopPageContainer gridColumn={4} searchParams={searchParams} />
      <LatestBlogPosts />
    </section>
  );
};

export default ShopPageTwo;
