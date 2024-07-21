import React from 'react'
import { trimTitle } from './../../utilities/helpres';
import { Link } from 'react-router-dom';
import useProducts from './useProducts';
import { RevolvingDot } from 'react-loader-spinner';

export default function SearchProducts({ searchQuery, setSearchQuery }) {



    const { data: { data: products } = {}, isLoading } = useProducts()

    const filterdProducts = products?.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    const isFound = filterdProducts?.length > 0




    return (
        <div className=' absolute top-[100%] left-0 right-0 h-[300px] overflow-y-scroll bg-primary  text-white flex flex-col  '>

            {isLoading ? <div className='flex items-center h-full justify-center'>
                <RevolvingDot
                    visible={true}
                    color="white"
                    ariaLabel="revolving-dot-loading"
                    wrapperClass=''
                />
            </div>
                :
                isFound ? filterdProducts.map(item =>
                    <Link key={item._id} to={`/products/productinfo/${item._id}`} onClick={() => setSearchQuery('')} className='flex  border  border-slate-300 items-center gap-x-3 p-3 hover:bg-title  '>
                        <div className='w-3/12 h-10  rounded-md  '>
                            <img className='w-full h-full object-cover rounded-md' src={item.imageCover} alt="" />
                        </div>
                        <p>{trimTitle(item.title)}</p>
                    </Link>
                ) : <p className='p-3'>Not Avalibale Now</p>

            }


        </div>
    )
}
