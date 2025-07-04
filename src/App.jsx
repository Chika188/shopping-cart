import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import productsData from './data/products';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // 模拟从API获取数据
    const fetchProducts = () => {
      // 这里使用本地数据，后期可以替换为API调用
      setProducts(productsData);
    };
    
    fetchProducts();
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main>
          <ProductList products={products} />
        </main>
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
