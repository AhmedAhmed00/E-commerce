import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryItem({ item }) {

    const { image } = item
    return (


        <div className='relative overflow-hidden
                         rounded-lg transition-transform
                         border border-black
                        shadow-md
                          duration-300 hover:transform hover:-translate-y-3'>
            <Link >

                <img className='w-full h-full object-cover' src={image} alt="" />
            </Link>

        </div>
    )
}
