import React from 'react'
import SliderContainer from './SliderContainer'
import sliderImage from "../../public/slider-2.jpeg"

export default function HeaderImages() {
    return (
        <div className='xs:w-full  lg:w-10/12'>

            <SliderContainer slidesToShow={1} slidesToScroll={1} draggable={true} isResponsive={false} >

                <div >
                    <img src={sliderImage} alt="" className='rounded-xl xs:h-screen md:h-auto  object-cover' />
                </div>

                <div >
                    <img src={sliderImage} alt="" className='rounded-xl  xs:h-screen md:h-auto object-cover ' />
                </div>

            </SliderContainer>
        </div>
    )
}
