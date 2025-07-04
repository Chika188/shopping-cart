import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import SizeFilter from './SizeFilter';
import PriceSort from './PriceSort';
import Loading from './Loading';

const ProductList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // 模拟加载延迟
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    let result = [...products];
    
    // 应用尺寸筛选
    if (selectedSizes.length > 0) {
      result = result.filter(product => 
        product.sizes.some(size => selectedSizes.includes(size))
      );
    }
    
    // 应用价格排序
    if (sortOrder === 'asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      result.sort((a, b) => b.price - a.price);
    }
    
    setFilteredProducts(result);
  }, [products, selectedSizes, sortOrder]);
  
  const handleSizeChange = (size) => {
    setSelectedSizes(prev => {
      if (prev.includes(size)) {
        return prev.filter(s => s !== size);
      } else {
        return [...prev, size];
      }
    });
  };
  
  const handleSortChange = (order) => {
    setSortOrder(order === sortOrder ? null : order);
  };
  
  if (loading) {
    return <Loading />;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
        <div className="w-full md:w-64 mb-6 md:mb-0">
          <SizeFilter 
            selectedSizes={selectedSizes} 
            onSizeChange={handleSizeChange} 
          />
          <PriceSort 
            sortOrder={sortOrder} 
            onSortChange={handleSortChange} 
          />
        </div>
        
        <div className="flex-1">
          <p className="mb-4">共找到 {filteredProducts.length} 个商品</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;