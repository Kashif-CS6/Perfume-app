import { useState, useEffect } from "react";
import data from "../../dumy/data";

const calculateCatagoryCounts = (data) => {
  let catagoryCounts = {};

  // Iterate through each object in the data array
  data.forEach((course) => {
    const catagory = course.category;

    // Increment the count for the language
    catagoryCounts[catagory] = (catagoryCounts[catagory] || 0) + 1;
  });

  return catagoryCounts;
};

const Catagorycheckbox = ({ catagory, checked, onChange }) => {
  const [catagoryCounts, setCatagoryCounts] = useState({});

  useEffect(() => {
    const counts = calculateCatagoryCounts(data);
    setCatagoryCounts(counts);
  }, [data]);

  return (
    <div>
      <label className="flex justify-between items-center my-2 text-xs">
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            value={catagory}
            checked={checked}
            onChange={onChange}
          />
          {catagory}
        </div>
        <p className="text-gray-400 text-xs">
          ({catagoryCounts[catagory] || 0})
        </p>
      </label>
    </div>
  );
};

export default Catagorycheckbox;
