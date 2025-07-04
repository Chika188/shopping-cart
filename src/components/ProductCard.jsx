import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import SizeSelector from './SizeSelector';
import { formatPrice } from '../utils/helpers';

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSizeSelector, setShowSizeSelector] = useState(false);
  const [error, setError] = useState('');
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    if (!showSizeSelector) {
      setShowSizeSelector(true);
      return;
    }
    
    if (!selectedSize) {
      setError('请选择尺码');
      return;
    }
    
    addToCart(product, selectedSize);
    setError('');
    setShowSizeSelector(false);
    setSelectedSize(null);
  };
  
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setError('');
  };
  
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md relative"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-[auto] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          热销
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-xl font-bold">¥{formatPrice(product.price)}</p>
          <div className="text-sm text-gray-500">
            {product.sizes.map(size => (
              <span key={size} className="mr-1">{size}</span>
            ))}
          </div>
        </div>
        
        {showSizeSelector && (
          <SizeSelector 
            sizes={product.sizes} 
            onSizeSelect={handleSizeSelect} 
          />
        )}
        
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        
        <button
          className="w-full mt-3 bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors"
          onClick={handleAddToCart}
        >
          {showSizeSelector ? '添加到购物车' : '选择尺码'}
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;