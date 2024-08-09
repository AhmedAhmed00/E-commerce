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
        right: "-8px",
        zIndex: "1",
        borderRadius: "50%",
        backgroundColor: "gray",
        height: "30px",
        width: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
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
        ...style,
        left: "-8px",
        zIndex: "1",
        borderRadius: "50%",
        backgroundColor: "gray",
        height: "30px",
        width: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    />
  );
}

export default function SliderContainer({
  children,
  slidesToShow,
  slidesToScroll,
  draggable,
  className,
  isResponsive,
}) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow,
    slidesToScroll,
    draggable,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className,
    initialSlide: 1,

    responsive: isResponsive
      ? [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]
      : "",
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
