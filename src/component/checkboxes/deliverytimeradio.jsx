"use client";
import { useState, useEffect } from "react";
import data from "../../dumy/data";

const calculateTimeCounts = (data) => {
  let timeCounts = {};

  // Iterate through each object in the data array
  data.forEach((course) => {
    const time = course.deliveryTime;

    // Increment the count for the language
    timeCounts[time] = (timeCounts[time] || 0) + 1;
  });

  return timeCounts;
};

const DeliveryTimeRadio = ({ deliveryTime, checked, onChange }) => {
  const [timeCounts, setTimeCounts] = useState({});

  useEffect(() => {
    const counts = calculateTimeCounts(data);
    setTimeCounts(counts);
  }, [data]);
  return (
    <div>
      <label className="flex items-center justify-between my-2 text-xs">
        <div className="flex items-center gap-1">
          <input
            type="radio"
            value={deliveryTime}
            checked={checked}
            onChange={onChange}
          />
          {deliveryTime}
        </div>
        <p className="text-gray-400 text-xs">
          ({timeCounts[deliveryTime] || 0})
        </p>
      </label>
    </div>
  );
};

export default DeliveryTimeRadio;
