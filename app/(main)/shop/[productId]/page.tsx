
import ProductGallery from "@/components/product/ProductGallery";
import { productsData } from "@/data/products/productsData";
import React from "react";
import RelatedProducts from "@/components/products/RelatedProducts";
import BreadcrumbComponent from "@/components/others/Breadcrumb";
import ProductDetails from "@/components/product/ProductDetails";

// Define the props interface for the component
interface ProductIdPageProps {
  params: { productId: string };
}

// Define the main component
const ProductIdPage = ({ params }: ProductIdPageProps) => {
  // TODO: fetch product data with the productId

  // Find the product with the specified ID from the products data
  const product = productsData.find(
    (product) => product.id === Number(params.productId)
  );

  // Filter related products based on the category of the current product
  const relatedProducts = productsData.filter(
    (prod) => prod.category === product?.category
  );

  // Return the JSX structure of the component
  return (
    <div className="max-w-screen-2xl mx-auto p-2 md:p-8 flex flex-col items-start gap-2 min-h-screen">
      {/* Breadcrumb Component */}
      <div className="my-2">
        <BreadcrumbComponent links={["/shop"]} pageText={product?.name!} />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        {/* Product Gallery */}
        <ProductGallery isInModal={false} images={product?.images!} />
        {/* product details */}
        <ProductDetails product={product!}/>
      </div>
      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />
    </div>
  );
};

// Export the component as default
export default ProductIdPage;
