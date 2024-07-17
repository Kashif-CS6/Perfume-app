"use client";
import React, { useState } from "react";

const Pricing = ({ rangeValue, setrange }) => {
  const handleRangeChange = (e) => {
    setrange(e.target.value);
  };

  return (
    <div className="my-2">
      <label
        htmlFor="minmax-range"
        className="block mb-2 text-sm font-medium text-white  dark:text-white"
      ></label>
      <input
        id="minmax-range"
        type="range"
        min="100"
        max="8000"
        // value={rangeValue}
        // onChange={handleRangeChange}
        className="w-full h-1 bg-gay-200 rounded-lg bg-blue-400 appearance-none cursor-pointer dark:bg-blue-700"
      />
      <h1 className="text-black text-center text-xs">
        {" "}
        Selected price: ${rangeValue}
      </h1>
    </div>
  );
};

export default Pricing;
