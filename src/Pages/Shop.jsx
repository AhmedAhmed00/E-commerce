import { useSearchParams } from "react-router-dom";
import { ShopSpecifications } from "../features/shop/ShopSpecifications";
import useProducts from "./../features/Products/useProducts";
import ShopHaeder from "../features/shop/ShopHaeder";
import ShopItems from "./ShopItems";
import { useState } from "react";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showSpecifcaitonsList, setShowSpecList] = useState(false);

  const {
    isError,
    isLoading,
    isFetching,
    data: {
      data: products,
      metadata: { nextPage, prevPage, numberOfPages, currentPage } = {},
    } = {},
  } = useProducts("8");

  function handleSpecificationsChange(e) {
    const { name, value } = e.target;
    searchParams.set("page", 1);
    value ? searchParams.set(name, value) : searchParams.delete(name);
    setSearchParams(searchParams);
  }

  function handleShowSpecList() {
    setShowSpecList((show) => !show);
  }

  function handleNext() {
    if (nextPage) {
      window.scrollTo(0, 0);
      searchParams.set("page", nextPage);
      setSearchParams(searchParams);
    }
  }

  function handlePrev() {
    if (prevPage) {
      window.scrollTo(0, 0);
      searchParams.set("page", prevPage);
      setSearchParams(searchParams);
    }
  }

  return (
    <>
      {isError ? (
        <div>errrrrrrrrrr</div>
      ) : (
        <div className="container flex xs:flex-wrap md:justify-between gap-6 py-6">
          <ShopSpecifications
            handleShowSpecList={handleShowSpecList}
            showSpecifcaitonsList={showSpecifcaitonsList}
            handleSpecificationsChange={handleSpecificationsChange}
          />

          <div className="flex-1 bg-red">
            <ShopHaeder
              handleShowSpecList={handleShowSpecList}
              handleSpecificationsChange={handleSpecificationsChange}
            />
            <ShopItems
              currentPage={currentPage}
              handlePrev={handlePrev}
              handleNext={handleNext}
              numberOfPages={numberOfPages}
              products={products}
              isFetching={isFetching}
              isLoading={isLoading}
            />
          </div>
        </div>
      )}
    </>
  );
}
