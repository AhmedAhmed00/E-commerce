import React from 'react'
import { formatPrice } from '../../utilities/helpres';
import Rating from '../../Components/Rating';

export default function SelectedOrderdItem({ item }) {

  const { count, price, product: { imageCover, ratingsAverage, title, brand: { name } } } = item




  return (

    <div className='flex flex-1 text-primary font-oswald 
     justify-between  items-center border-b border-black
      last-of-type:border-none pb-4 mt-2'>
      <div className='flex '>

        <img className='w-24 h-24 me-3 rounded-lg object-cover shadow-md hover:border' src={imageCover} alt="" />
        <div>
          <span className='flex items-center'>
            <Rating rating={ratingsAverage} />
            <p className='inline-block px-1'>({ratingsAverage})</p>
          </span>

          <p>Title: <span className='text-[#aa813f]'> {title}</span></p>
          <p >Brand: <span className='text-[#aa813f]' > {name}</span>  </p>
          <p>items: <span className='text-[#aa813f]'>{count}</span></p>

        </div>
      </div>
      <div>

        <p className='xs:text-xl md:text-2xl  text-[#aa813f] font-extrabold  '> {formatPrice(price)}</p>
      </div>
    </div>
  )
}
