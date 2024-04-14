import React, { useEffect, useState } from 'react'
import CustomArrows from '../Components/Slider';
import CategoriesHeader from './CategoriesHeader';
import { Slider } from 'react-slick';
import SliderContainer from './SliderContainer';
import BASE_URL from '../Services/BaseUrl';
import { useQuery } from '@tanstack/react-query';


function Brand() {




}

export default function Header() {




    async function getBrands() {
        const res = await fetch(`${BASE_URL}/brands`)
        const data = await res.json()
        return data.data
    }

    const { data: brands } = useQuery({
        queryKey: ['brand'],
        queryFn: getBrands
    })


    return (



        <header className='bg-[url(../../public/assets/slider-2.jpeg)] bg-cover bg-center header  relative mb-10 md:bg-[url()]' >
            <div className="content  pt-6 hidden md:block md:container">
                <div className=" flex flex-nowrap justify-between gap-8 ">
                    <CategoriesHeader />
                    <div className=' md:w-full lg:w-10/12 m-auto  h-[100%!important] '>
                        <SliderContainer slidesToShow={1} slidesToScroll={1} draggable={true} isResponsive={false} >
                            <div>
                                <img src="../../public/assets/iphone.png" alt="" className='background-image' />
                            </div>
                            <div>
                                <img src="../../public/assets/slider-2.jpeg" alt="" />
                            </div>
                            <div>
                                <img src="../../public/assets/slider-3.jpeg" alt="" />
                            </div>
                            <div>
                                <img src="../../public/assets/slider-2.jpeg" alt="" />
                            </div>
                            <div>
                                <img src="../../public/assets/slider-2.jpeg" alt="" />
                            </div>
                            <div>
                                <img src="../../public/assets/slider-2.jpeg" alt="" />
                            </div>
                        </SliderContainer>
                    </div>
                </div>

                <SliderContainer slidesToShow={9} slidesToScroll={2} draggable={false} isResponsive={true} className='rounded-full py-4 px-14  w-full containe '   >
                    {brands?.map(brand =>
                        <div className='slider-item  px-2 py-2' key={brand._id}>
                            <img src={brand.image} alt="" className=' w-full h-full rounded-2xl shadow-md' />
                        </div>

                    )}



                </SliderContainer>



            </div>


        </header >









    )
}
