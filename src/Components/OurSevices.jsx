import React from "react";
import { FaMapMarkedAlt, FaShuttleVan } from "react-icons/fa";
import { GiBoxUnpacking } from "react-icons/gi";
import { IoRocket } from "react-icons/io5";

export default function OurSevices() {
  return (
    <>
      <div className="grid bg-van pb-10 round  xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container">
        <div className="flex border p-5 bg-vanilla border-gray-400    items-center   ">
          <i className="">
            <IoRocket className="w-14 h-14 mb-2 me-4 bg-primary dark:bg-indigo-500 text-white p-2 rounded-full" />
          </i>
          <div>
            <h3>Fast & Free Shipping</h3>
            <p className="text-sm text-slate-600">12 Months Installments</p>
          </div>
        </div>
        <div className="flex border p-5 bg-vanilla border-gray-400    items-center">
          <i className=" ">
            <FaShuttleVan className="w-14 h-14 mb-2 me-4 bg-primary dark:bg-indigo-500  text-white p-2 rounded-full" />
          </i>
          <div>
            <h3> Card Payments</h3>
            <p className="text-sm text-slate-600">Capped at EGP 39 Per Order</p>
          </div>
        </div>
        <div className="flex  border p-5 bg-vanilla border-gray-400   items-center    ">
          <i className="">
            <GiBoxUnpacking className="w-14 h-14 mb-2 me-4 bg-primary dark:bg-indigo-500 text-white p-2 rounded-full" />
          </i>
          <div>
            <h3>Safe Shopping</h3>
            <p className="text-sm text-slate-600">Shop with confidence</p>
          </div>
        </div>
        <div className="flex border p-5 bg-vanilla border-gray-400   items-center   ">
          <i className="">
            <FaMapMarkedAlt className="w-14 h-14 mb-2 me-4 bg-primary dark:bg-indigo-500 text-white p-2 rounded-full" />
          </i>
          <div>
            <h3>Transportation</h3>
            <p className="text-sm text-slate-600">Shop with confidence</p>
          </div>
        </div>
      </div>

      <div className="grid xs:grid-cols-1 lg:grid-cols-2  grid-cols-2 container gap-5 mb-6 ">
        <img
          className="rounded-lg shadow-sm"
          src="../../public/assets/banner-1.jpg"
          alt=""
        />

        <img
          className="rounded-lg shadow-sm"
          src="../../public/assets/banner-2.jpg"
          alt=""
        />
      </div>
    </>
  );
}
