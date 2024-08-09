import React from "react";

export default function SectionHeader({ redContent, textContent, bg }) {
  return (
    <div className={`pb-4 text-center ` + bg}>
      <h3 className="text-red-500 font-semibold m-auto text-lg  ">
        {redContent}
      </h3>

      <h2 className=" text-5xl font-extrabold first-letter:text-red-500 text-primary">
        {textContent}
      </h2>
      <div></div>
    </div>
  );
}
