import LatestBlogPosts from "@/components/blog/LatestBlogPosts";
import ShopPageContainer from "@/components/products/ShopPageContainer";

import React from "react";

interface ShopPageTwoProps {
  searchParams: {
    page: string;
    category: string;
    brand: string;
    search: string;
    min:string,
    max:string,
    color:string
  };
}

const ShopPageTwo = ({ searchParams }: ShopPageTwoProps) => {
  return (
    <section>
      <ShopPageContainer showHomeBanner={true} gridColumn={4} searchParams={searchParams} />
      <LatestBlogPosts twoColunmHeader={true} />
    </section>
  );
};

export default ShopPageTwo;
