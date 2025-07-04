import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { formatPrice, safeCalc } from '../utils/helpers';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  const handleIncrease = () => {
    updateQuantity(item.id, item.size, item.quantity + 1);
  };
  
  const handleDecrease = () => {
    updateQuantity(item.id, item.size, item.quantity - 1);
  };
  
  const handleRemove = () => {
    removeFromCart(item.id, item.size);
  };
  
  const itemTotal = safeCalc.multiply(item.price, item.quantity);
  
  return (
    <div className="flex items-center py-4 border-b">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-16 h-16 object-cover rounded"
      />
      
      <div className="ml-4 flex-grow">
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-sm text-gray-500">尺码: {item.size}</p>
        <p className="text-sm">¥{formatPrice(item.price)}</p>
      </div>
      
      <div className="flex items-center">
        <button 
          className="w-8 h-8 flex items-center justify-center border rounded-l"
          onClick={handleDecrease}
          aria-label="减少数量"
        >
          <FaMinus size={12} />
        </button>
        <span className="w-8 h-8 flex items-center justify-center border-t border-b">
          {item.quantity}
        </span>
        <button 
          className="w-8 h-8 flex items-center justify-center border rounded-r"
          onClick={handleIncrease}
          aria-label="增加数量"
        >
          <FaPlus size={12} />
        </button>
      </div>
      
      <div className="ml-4 w-20 text-right">
        <p className="font-medium">¥{formatPrice(itemTotal)}</p>
      </div>
      
      <button 
        className="ml-4 text-red-500"
        onClick={handleRemove}
        aria-label="删除商品"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;