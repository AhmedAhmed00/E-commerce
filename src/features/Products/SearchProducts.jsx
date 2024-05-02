import React from 'react'
import { trimTitle } from './../../utilities/helpres';
import { Link } from 'react-router-dom';

export default function SearchProducts({ arrOfResaults, setSearchQuery }) {






    return (
        <div className=' absolute top-[100%] left-0 right-0 h-[300px] overflow-y-scroll bg-primary  text-white flex flex-col  '>
            {arrOfResaults.map(item =>
                <Link key={item._id} to={`/products/productinfo/${item._id}`} onClick={() => setSearchQuery('')} className='flex  border  border-slate-300 items-center gap-x-3 p-3 hover:bg-title  '>
                    <div className='w-3/12 h-10  rounded-md  '>
                        <img className='w-full h-full object-cover rounded-md' src={item.imageCover} alt="" />
                    </div>

                    <p>{trimTitle(item.title)}</p>
                </Link>

            )}
        </div>
    )
}
