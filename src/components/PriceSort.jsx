const PriceSort = ({ sortOrder, onSortChange }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium mb-2">价格：</h3>
      <div className="flex gap-2">
        <button
          className={`px-3 py-1 border rounded ${sortOrder === 'asc' ? 'bg-blue-500 text-white' : 'bg-white'}`}
          onClick={() => onSortChange('asc')}
        >
          按价格升序
        </button>
        <button
          className={`px-3 py-1 border rounded ${sortOrder === 'desc' ? 'bg-blue-500 text-white' : 'bg-white'}`}
          onClick={() => onSortChange('desc')}
        >
          按价格降序
        </button>
      </div>
    </div>
  );
};

export default PriceSort;