import Slider from "react-slick";

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


export default function SliderContainer({ children, slidesToShow, slidesToScroll, draggable }) {
    const settings = {
        infinite: true,
        slidesToShow,
        slidesToScroll,
        draggable,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}

