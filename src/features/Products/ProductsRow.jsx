
import React from "react";

import ProductItem from './ProductItem';
import useWishlist from "../wishlist/useWishlist";
import SliderContainer from "../../Components/SliderContainer";







export default function Row({ items, role = "row" }) {





    const productsToShow = items
    const { wishlist: { data: wishlistItems } = {} } = useWishlist()

    const isFav = items?.map(product => product)
    console.log(isFav);




    return (

        <>
            {role === "row" && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 '>
                {productsToShow?.map((product) => <ProductItem wishlistItems={wishlistItems} product={product} key={product._id} />)}
            </div>}
            {role === "slider" &&


                <SliderContainer draggable={false} slidesToShow={5} slidesToScroll={2} >
                    {productsToShow?.map((product) => <ProductItem wishlistItems={wishlistItems} product={product} key={product._id} className={'mx-2 '} />)}
                </SliderContainer>



            }

        </>




    )
}







