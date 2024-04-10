import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (
        <Slider {...settings}>
            <div>
                <img src="../../public/assets/slider-2.jpeg" alt="" />
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
            <div>
                <img src="../../public/assets/slider-2.jpeg" alt="" />
            </div>
            <div>
                <img src="../../public/assets/slider-2.jpeg" alt="" />
            </div>
        </Slider>
    );
}