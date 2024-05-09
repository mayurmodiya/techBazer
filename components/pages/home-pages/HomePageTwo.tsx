import BannerTwo from "@/components/banners/BannerTwo";
import LatestBlogPosts from "@/components/blog/LatestBlogPosts";
import CategorySectionOne from "@/components/category/CategorySectionOne";
import HeroBannerTwo from "@/components/hero/HeroBannerTwo";
import NewsLetterTwo from "@/components/newsLetter/NewsLetterTwo";
import BenefitsSection from "@/components/others/BenefitSection";
import TestimonialsSection from "@/components/others/Testimonials";
import ProductsCollectionTwo from "@/components/products/ProductsCollectionTwo";
import React from "react";

const HomePageTwo = () => {
  return (
    <div className="overflow-hidden">
      <HeroBannerTwo />
      <CategorySectionOne />
      <ProductsCollectionTwo />
      <BenefitsSection textCenter={true}/>
      <BannerTwo />
      <TestimonialsSection textCenter={true} />
      <LatestBlogPosts twoColunmHeader={false} />
      <NewsLetterTwo />
    </div>
  );
};

export default HomePageTwo;
