import React, { useState, useEffect } from 'react';
import CatForm from '../components/CatForm';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import productsData from '../data/products';

function Shop() {
  const [catDetails, setCatDetails] = useState({ name: '', age: '', breed: '' });
  const [cart, setCart] = useState([]);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleCatDetailsChange = (e) => {
    const { name, value } = e.target;
    setCatDetails({ ...catDetails, [name]: value });
  };

  const handleAddToCart = (product) => {
    setCart([...cart, { ...product, monthly: false }]);
  };

  const handleMonthlyToggle = (productId) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, monthly: !item.monthly } : item
    ));
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const filteredProducts = productsData.filter(product => product.breed === catDetails.breed);

  return (
    <div>
      <h1>Online Cat Store</h1>
      <CatForm catDetails={catDetails} handleCatDetailsChange={handleCatDetailsChange} />
      <ProductList products={filteredProducts} handleAddToCart={handleAddToCart} catDetails={catDetails} />
      <Cart cart={cart} handleMonthlyToggle={handleMonthlyToggle} handleClearCart={handleClearCart}/>
    </div>
  );
}

export default Shop;
