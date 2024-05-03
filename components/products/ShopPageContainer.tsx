"use client";
import React, { useEffect, useState } from "react";
import ProductViewChange from "../product/ProductViewChange";
import { productsData } from "@/data/products/productsData";
import Pagination from "../others/Pagination";
import SingleProductListView from "@/components/product/SingleProductListView";
import { Product, SearchParams } from "@/types";
import SingleProductCartView from "../product/SingleProductCartView";

interface ShopPageContainerProps {
  searchParams: SearchParams;
  gridColumn?: number;
}

const ShopPageContainer = ({
  searchParams,
  gridColumn,
}: ShopPageContainerProps) => {
  const [listView, setListView] = useState(false);
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [paginatedData, setPaginatedData] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.page) || 1
  );
  const itemsPerPage = 6;

  // Function to filter data based on search params
  const filterData = () => {
    let filteredProducts = productsData;

    // Filter by category
    if (searchParams.category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === searchParams.category
      );
    }

    // Filter by brand
    if (searchParams.brand) {
      filteredProducts = filteredProducts.filter(
        (product) => product?.brand === searchParams.brand
      );
    }

    // Filter by color
    if (searchParams.color) {
      filteredProducts = filteredProducts.filter(
        (product) => product?.color === searchParams.brand
      );
    }

    // Filter by min and max price
    if (searchParams.min && searchParams.max) {
      const minPrice = parseFloat(searchParams.min);
      const maxPrice = parseFloat(searchParams.max);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

    // Apply other filters...

    return filteredProducts;
  };

  // Update filtered data whenever search params change
  useEffect(() => {
    const filteredProducts = filterData();
    setFilteredData(filteredProducts);
    setCurrentPage(1); // Reset pagination to first page when filters change
  }, [searchParams]);

  // change currentPage when searchparams page change
  useEffect(() => {
    setCurrentPage(Number(searchParams.page) || 1);
  }, [searchParams.page]);

  // Update paginated data whenever filtered data or pagination settings change
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredData.slice(startIndex, endIndex);
    setPaginatedData(paginatedProducts);
  }, [filteredData, currentPage]);

  if (paginatedData.length === 0) {
    return (
      <div className="h-screen text-xl mx-auto font-semibold space-y-4">
        <ProductViewChange
          listView={listView}
          setListView={setListView}
          totalPages={Math.ceil(filteredData.length / itemsPerPage)}
          itemPerPage={itemsPerPage}
          currentPage={currentPage}
        />
        <p>Sorry No Result Found With Your Filter Selection</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto overflow-hidden">
      <ProductViewChange
        listView={listView}
        setListView={setListView}
        totalPages={Math.ceil(filteredData.length / itemsPerPage)}
        itemPerPage={itemsPerPage}
        currentPage={currentPage}
      />

      {listView === true && (
        <div className="overflow-hidden p-4 gap-4 lg:gap-6">
          {paginatedData.map((product) => (
            <SingleProductListView key={product.id} {...product} />
          ))}
        </div>
      )}
      {listView === false && (
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${
            gridColumn || 3
          } overflow-hidden p-2 lg:p-4 gap-4 lg:gap-6`}
        >
          {paginatedData.map((product) => (
            <SingleProductCartView key={product.id} {...product} />
          ))}
        </div>
      )}

      <Pagination
        totalPages={Math.ceil(filteredData.length / itemsPerPage)}
        currentPage={currentPage}
        pageName="page"
      />
    </div>
  );
};

export default ShopPageContainer;
