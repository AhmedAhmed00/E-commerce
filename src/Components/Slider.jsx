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
                right: "20px", zIndex: "1", borderRadius: "50%",
                backgroundColor: "tomato",
                height: "30px",
                width: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
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
            style={{
                ...style, left: "20px", zIndex: "1", borderRadius: "50%",
                backgroundColor: "tomato",
                height: "30px",
                width: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
            onClick={onClick}
        />
    );
}


export default function CustomArrows({ slidesToShow }) {
    const settings = {

        infinite: true,
        slidesToShow,
        slidesToScroll: 1,
        swipeToSlide: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,



    };
    return (
        <div className="w-10/12">
            <Slider {...settings}  >
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