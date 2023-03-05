import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeBar: React.FC = () => {
  const [value, setValue] = useState<number>(5000);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="flex items-center">
      <div className="w-1/4 text-gray-500 text-sm font-medium">$1,000</div>
      <div className="w-1/2 mx-4">
        <Slider
          min={1000}
          max={10000}
          step={100}
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className="w-1/4 text-gray-500 text-sm font-medium">$10,000</div>
    </div>
  );
};

export default RangeBar;
