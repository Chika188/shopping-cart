const SizeFilter = ({ selectedSizes, onSizeChange }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  
  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium mb-2">尺寸：</h3>
      <div className="flex flex-wrap gap-2">
        {sizes.map(size => (
          <label 
            key={size} 
            className="flex items-center"
          >
            <input
              type="checkbox"
              checked={selectedSizes.includes(size)}
              onChange={() => onSizeChange(size)}
              className="mr-1"
            />
            <span>{size}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;