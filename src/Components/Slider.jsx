import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,

                right: "20px", right: "20px", zIndex: "1", borderRadius: "50%"


            }
            }
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "20px", zIndex: "1", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

export default function CustomArrows() {
    const settings = {

        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,


    };
    return (
        <div>
            <Slider {...settings} className="pt-10  " >
                <div>
                    <img src="../../public/assets/iphone.png" alt="" />
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
        </div>

    );
}