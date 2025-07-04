import { useState } from 'react';

const SizeSelector = ({ sizes, onSizeSelect }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  
  const handleSizeClick = (size) => {
    setSelectedSize(size);
    onSizeSelect(size);
  };
  
  return (
    <div className="mt-2">
      <h4 className="text-sm font-medium mb-1">选择尺码：</h4>
      <div className="flex flex-wrap gap-1">
        {sizes.map(size => (
          <button
            key={size}
            className={`w-8 h-8 border rounded-full flex items-center justify-center text-xs
              ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black'}`}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;