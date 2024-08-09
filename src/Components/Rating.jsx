import React from "react";
import Star from "./Star";

export default function Rating({ rating }) {
  return (
    <div className="flex">
      {Array.from({ length: rating }, (_, i) => (
        <Star color="#ffcda5" key={i} />
      ))}
      {Array.from({ length: 5 - rating }, (_, i) => (
        <Star color="white" key={i} />
      ))}
    </div>
  );
}
