import React from "react";
import SliderContainer from "../../Components/SliderContainer";
import BrandItem from "./BrandItem";

export default function BrandsSlider({ brands }) {
  return (
    <SliderContainer
      slidesToShow={9}
      slidesToScroll={2}
      draggable={false}
      isResponsive={true}
      className="  md:mt-6 py-6  px-10 w-full bg-primary-2 rounded-lg shadow-sm"
    >
      {brands?.map((brand) => (
        <BrandItem brand={brand} key={brand._id} />
      ))}
    </SliderContainer>
  );
}
