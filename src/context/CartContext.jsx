import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  /**
   * @description 添加商品到购物车
   * @param {*} product  商品对象
   * @param {*} size 尺寸
   * @param {*} quantity 数量
   */
  const addToCart = (product, size, quantity = 1) => {
    setCart(prevCart => {
      // 检查购物车中是否已有相同商品和尺寸
      const existingItemIndex = prevCart.findIndex(
        item => item.id === product.id && item.size === size
      );

      if (existingItemIndex >= 0) {
        // 如果已存在，更新数量
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        // 如果不存在，添加新商品项
        return [...prevCart, { ...product, size, quantity }];
      }
    });
  };

  const removeFromCart = (id, size) => {
    setCart(prevCart => 
      prevCart.filter(item => !(item.id === id && item.size === size))
    );
  };

  /**
   * @description 更新购物车商品数量
   * @param {*} id 商品id
   * @param {*} size 尺寸
   * @param {*} quantity 数量
   * @returns 
   */
  const updateQuantity = (id, size, quantity) => {  
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }
    
    setCart(prevCart => {
       console.log('quantity',quantity,prevCart);
      return prevCart.map(item => 
        item.id === id && item.size === size 
          ? { ...item, quantity } 
          : item
      )
    }
     
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return parseFloat(
      cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0).toFixed(2)
    );
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount,
      isCartOpen,
      toggleCart
    }}>
      {children}
    </CartContext.Provider>
  );
};