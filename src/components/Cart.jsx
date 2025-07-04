import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import { formatPrice } from '../utils/helpers';

const Cart = () => {
  const { cart, isCartOpen, toggleCart, getCartTotal, clearCart } = useCart();
  
  const handleCheckout = () => {
    alert(`结算成功！总金额：¥${formatPrice(getCartTotal())}`);
    clearCart();
    toggleCart();
  };
  
  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
          />
          
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">购物车</h2>
                <button 
                  className="p-1"
                  onClick={toggleCart}
                  aria-label="关闭购物车"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              
              {cart.length === 0 ? (
                <p className="text-center py-8 text-gray-500">购物车是空的</p>
              ) : (
                <>
                  <div className="mb-4">
                    {cart.map((item, index) => (
                      <CartItem key={`${item.id}-${item.size}-${index}`} item={item} />
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold mb-4">
                      <span>总计：</span>
                      <span>¥{formatPrice(getCartTotal())}</span>
                    </div>
                    
                    <button
                      className="w-full bg-black text-white py-3 rounded font-medium hover:bg-gray-800 transition-colors"
                      onClick={handleCheckout}
                    >
                      结算
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;