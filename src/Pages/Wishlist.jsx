import React, { useState } from 'react'
import useWishlist from '../features/wishlist/useWishlist'
import Row from '../features/Products/ProductsRow';
import LoaderSpinner from './../Components/LoaderSpinner';
import Button from './../Components/Button';

export default function Wishlist() {

    const { wishlist, isLoading } = useWishlist()

    const [numberToShow, setNumberToShow] = useState(5)

    const itemsToShow = wishlist?.data.slice(0, numberToShow)


    function handleNumberChange() {
        setNumberToShow(number => number + 5)

    }


    return (
        <div className='container'>

            {isLoading ? <LoaderSpinner /> :

                wishlist.data.length ?

                    < div className='my-6 '>
                        <h3 className='text-2xl text-center text-primary  mb-3  
                '> Your Favourites <span className='text-3xl text-red-500 '>&#9829;</span> </h3>
                        <div className='flex flex-col'>
                            <Row items={itemsToShow} />

                            {itemsToShow.length < wishlist.data.length && <Button onclick={handleNumberChange} textContent={"Show More"} styles={'px-3 text-white py-2 text-xl'} />}






                        </div>
                    </div > : <div className='header text-3xl mt-10 '>There is no Items in your wishlist</div>

            }




        </div>

    )

}

