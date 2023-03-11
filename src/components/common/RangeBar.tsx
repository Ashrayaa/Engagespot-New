import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeBar: React.FC = () => {
  const [value, setValue] = useState<number>(5000);

  const handleChange = (newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <div className=" text-gray-500 text-sm font-medium">$1,000</div>
      <div className="w-full">
        <Slider
          min={1000}
          max={10000}
          step={100}
          value={value}
          onChange={handleChange}
          className=""
        />   
      </div>
      <div className=" text-gray-500 text-sm font-medium">$10,000</div>
    </div>
  );
};

export default RangeBar;
