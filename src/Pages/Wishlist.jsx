import React, { useState } from "react";
import useWishlist from "../features/wishlist/useWishlist";
import LoaderSpinner from "./../Components/LoaderSpinner";
import Button from "./../Components/Button";
import ProductsRow from "../features/Products/ProductsRow";

const responsiveStyles =
  "grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5";

export default function Wishlist() {
  const { wishlist, isLoading, isError } = useWishlist();

  const [numberToShow, setNumberToShow] = useState(5);

  const itemsToShow = wishlist?.data.slice(0, numberToShow);

  function handleNumberChange() {
    setNumberToShow((number) => number + 5);
  }

  return (
    <div className="container">
      {isLoading ? (
        <LoaderSpinner />
      ) : isError ? (
        <div>erooooorrrrrrrrrrrrro</div>
      ) : wishlist.data.length ? (
        <div className="py-6 ">
          <h3
            className=" text-head text-center text-primary  mb-3  font-bold
                "
          >
            {" "}
            Your Favourites{" "}
            <span className="text-3xl text-red-500 ">&#9829;</span>{" "}
          </h3>
          <div className="flex flex-col">
            <ProductsRow
              items={itemsToShow}
              resbonsiveStyles={responsiveStyles}
            />

            {itemsToShow.length < wishlist.data.length && (
              <Button
                onclick={handleNumberChange}
                textContent={"Show More"}
                styles={"px-3 bg-primary text-white py-1 text-lg"}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="header text-3xl mt-10 ">
          There is no Items in your wishlist
        </div>
      )}
    </div>
  );
}
