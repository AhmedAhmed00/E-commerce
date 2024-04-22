
import Rating from './../../Components/Rating';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utilities/helpres'
import { trimTitle } from '../../utilities/helpres'
import { FaShoppingCart } from 'react-icons/fa';
import { addProductToCart } from '../../Services/cartApi';
import useAddProduct from '../cart/useAddProduct';
import Button from '../../Components/Button';
import { MdFavoriteBorder } from 'react-icons/md';
import useAddToWhislist from '../wishlist/useAddToWhislist';
import useWishlist from '../wishlist/useWishlist';
import { useEffect, useState } from 'react';
import useDeleteWishlist from '../wishlist/useDeleteWishlist';

export default function ProductItem({ product, className = '', wishlistItems }) {



  const { title, description, quantity, price, imageCover, category: { name }, ratingsAverage, _id } = product

  const { addProduct, status } = useAddProduct()
  const { mutate: addToWishList } = useAddToWhislist()
  const { mutate: deleteFromWishlist } = useDeleteWishlist()
  const isLoading = status === "pending"
  const isFav = wishlistItems?.some(item => item._id === _id)



  function handleAddToWishList(id) {
    addToWishList({ productId: id })
  }


  function handleDeleteFromWishlist(id) {
    deleteFromWishlist(id)
  }



  return (

    <div className={`
    
    rounded-lg shadow-md border relative border-primary 
    hover:-translate-y-4
    transition-transform
    hover:transition-transform hover:duration-300
     " + ${className}`} >





      <Link to={`/products/productinfo/${_id}`}>


        <div className="image-container  relative group cursor-pointer">
          <p className='absolute bottom-0
           text-center w-full bg-black  
          rounded-md h-0 opacity-0
           text-white z-10 group-hover:opacity-100 
          group-hover:h-8
           flex items-center
            justify-center
             transition-all 
          duration-300'>Show Details</p>
          <img src={imageCover} className='  
           w-full rounded-md 
           min-h-[300px]
           object-cover object-center
             group-has-[img]:hover:backdrop-filter
               transition-all
              duration-150' alt="https://user-images.githubusercontent.com/3155693/30816001-24f28934-a1eb-11e7-88fd-5076836a7c63.png" />
          <i className='absolute -bottom-4 right-3 text-xl bg-primary-2  -black p-2 rounded-2xl z-10'><FaShoppingCart className='text-2xl text-primary ' /></i>
        </div>

      </Link>

      {isFav ?
        <button onClick={() => handleDeleteFromWishlist(_id)}
          className='absolute top-3 left-5 rounded-full  z-10'>
          <svg width="40px" height="40px"
            viewBox="0 0 24.00 24.00" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#550000"
            stroke-width="0.9359999999999999"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
              stroke-width="0.192"></g><g id="SVGRepo_iconCarrier">
              <path fill="#e99696" d="M12 5.881C12.981 4.729 14.484 4 16.05 4C18.822 4 21 6.178 21 8.95C21 12.3492 17.945 15.1195 13.3164 19.3167L13.305 19.327L12 20.515L10.695 19.336L10.6595 19.3037C6.04437 15.1098 3 12.3433 3 8.95C3 6.178 5.178 4 7.95 4C9.516 4 11.019 4.729 12 5.881Z" ></path> </g></svg>
        </button>

        :



        <button onClick={() => handleAddToWishList(_id)} className='absolute top-3 left-5 rounded-full   z-10'>

          <svg width="40px" height="40px"
            viewBox="0 0 24.00 24.00" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#550000"
            stroke-width="0.9359999999999999"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
              stroke-width="0.192"></g><g id="SVGRepo_iconCarrier">
              <path fill="" d="M12 5.881C12.981 4.729 14.484 4 16.05 4C18.822 4 21 6.178 21 8.95C21 12.3492 17.945 15.1195 13.3164 19.3167L13.305 19.327L12 20.515L10.695 19.336L10.6595 19.3037C6.04437 15.1098 3 12.3433 3 8.95C3 6.178 5.178 4 7.95 4C9.516 4 11.019 4.729 12 5.881Z" ></path> </g></svg>
        </button>



      }






      <div className='p-4 pb-2 bg-primary-2 rounded-lg '>
        <h3 className='text-pimary text-[#aa813f]'>{trimTitle(title)}</h3>

        <div className='flex justify-between items-center  '>
          <p className='text-sm'>{formatPrice(price)}</p>
          <Rating rating={ratingsAverage} />
        </div>

        <Button isLoading={isLoading} onclick={() => { addProduct(_id) }} textContent={"Add To Cart"} styles={'w-full   '} />
      </div>







    </div >



  )
}
