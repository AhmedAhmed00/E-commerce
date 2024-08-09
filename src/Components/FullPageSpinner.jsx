import React from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function FullPageSpinner() {
  return (
    <div className="h-screen xs:bg-primary md:bg-white grid place-items-center">
      <InfinitySpin
        color="#002d58"
        visible={true}
        height="200"
        width="200"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
