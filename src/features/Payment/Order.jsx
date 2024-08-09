import React from "react";
import { Outlet } from "react-router-dom";

export default function Order() {
  return (
    <>
      <div className="container py-6">
        <Outlet />
      </div>
    </>
  );
}
