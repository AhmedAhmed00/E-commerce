import React from "react";
import { Link } from "react-router-dom";

export default function BrandItem({ brand }) {
  return (
    <div className="mx-2 py-3 " key={brand._id}>
      <Link to={`/shop?brand=${brand._id}`}>
        <img
          src={brand.image}
          alt=""
          className=" w-full h-full rounded-2xl shadow-md"
        />
      </Link>
    </div>
  );
}
