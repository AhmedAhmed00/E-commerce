import React from 'react'

import { Link } from 'react-router-dom';







export default function CategoriesHeader({ categories }) {





    return (
        <div className=' hidden  bg-primary-2  lg:flex-1 
         list-none lg:flex lg:flex-col lg:justify-between font-semibold
          px-4 py-4 rounded-lg shadow-md'>
            {categories?.map(categoryItem =>
                <li key={categoryItem._id}
                    className='list text-base underline hover:text-sky 
                    text-white hover:transition  duration-150 '>
                    <Link to={`/shop?category[in]=${categoryItem._id}`}>{categoryItem.name}</Link>
                </li>)}
        </div>
    )
}