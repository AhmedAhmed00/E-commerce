import React from 'react'

export default function BrandItem({ brand }) {
    return (
        <div className='mx-2 pb-2' key={brand._id}>
            <img src={brand.image} alt="" className=' w-full h-full rounded-2xl shadow-md' />
        </div>
    )
}
