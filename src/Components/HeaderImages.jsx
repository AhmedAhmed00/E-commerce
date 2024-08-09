import React from "react";
import SliderContainer from "./SliderContainer";
import sliderImage from "../../public/iphone.png";
import sliderImage2 from "../../public/slider-2.jpeg";
import sliderImage3 from "../../public/grocery-banner-2.jpeg";
import sliderImage4 from "../../public/grocery-banner.png";
// import sliderImage3 from "../../public/slider-2.jpeg"
// import sliderImage4 from "../../public/slider-2.jpeg"

export default function HeaderImages() {
  return (
    <div className="xs:w-full  lg:w-10/12">
      <SliderContainer
        slidesToShow={1}
        slidesToScroll={1}
        draggable={true}
        isResponsive={false}
      >
        <div>
          <img
            src={sliderImage2}
            alt=""
            className="rounded-xl w-full  xs:h-screen md:h-auto object-cover "
          />
        </div>

        <div>
          <img
            src={sliderImage}
            alt=""
            className="rounded-xl w-full xs:h-screen md:h-auto  object-cover"
          />
        </div>

        <div>
          <img
            src={sliderImage3}
            alt=""
            className="rounded-xl w-full xs:h-screen md:h-auto  object-cover"
          />
        </div>
        <div>
          <img
            src={sliderImage4}
            alt=""
            className="rounded-xl w-full xs:h-screen md:h-auto  object-cover"
          />
        </div>
      </SliderContainer>
    </div>
  );
}
