import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Rating from './Rating';
import { formatPrice, trimTitle } from '../utilities/helpres';

export default function ProductItem({ product }) {

  const { title, description, quantity, price, imageCover, category: { name }, ratingsAverage } = product

 

  return (
    <div className='rounded-t-md border'>
      <div className="image-container relative group">
        <p className='absolute bottom-0 text-center w-full bg-slate-700 rounded-md h-0 opacity-0 text-white z-10 text-sm  group-hover:opacity-100 group-hover:h-10 flex items-center justify-center transition-all duration-300'>Add To Cart</p>
        <img src={imageCover} className=' h-60 w-full  rounded-md object-cover object-center group-has-[img]:hover:bg-blend-normal group-has-[img]:hover:blur-sm  transition-all duration-150' alt="" />
        <i className='absolute -bottom-4 right-3 text-xl bg-white p-2 rounded-2xl z-10'><FaShoppingCart /></i>
      </div>

      <div className='p-4 pb-2'>
        <h3 className=''>{trimTitle(title)}</h3>

        <div className='flex justify-between items-center'>
          <p className='text-sm text-red-400'>{formatPrice(price)}</p>
          <Rating rating={ratingsAverage} />
        </div>


      </div>
    </div>

  )
}
