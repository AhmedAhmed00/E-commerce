import React from 'react'
import SectionHeader from '../../Components/SectionHeader'
import BrandsSlider from './BrandsSlider'

export default function Brands({ brands }) {
    return (
        <>
            <div className='md:hidden   '>
                <SectionHeader textContent={"Best Brands"} redContent={'Shop Now'} />
            </div>
            <BrandsSlider brands={brands} />
        </>
    )
}
