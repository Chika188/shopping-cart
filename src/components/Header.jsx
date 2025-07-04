import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const { getCartCount, toggleCart } = useCart();
  
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">海北造衣厂</div>
      <button 
        className="relative p-2" 
        onClick={toggleCart}
        aria-label="购物车"
      >
        <FaShoppingCart size={24} />
        {getCartCount() > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {getCartCount()}
          </span>
        )}
      </button>
    </header>
  );
};

export default Header;