import React, { useState, useEffect } from 'react';
import CatForm from '../components/CatForm';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import productsData from '../data/products';
import Subscription from '../components/Subscription';

function Shop() {
  const [catDetails, setCatDetails] = useState({});
  const [cart, setCart] = useState([]);
  const [subscription, setSubscription] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    const savedSubscription = JSON.parse(localStorage.getItem('subscription'));
    if (savedCart) setCart(savedCart);
    if (savedSubscription) setSubscription(savedSubscription);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('subscription', JSON.stringify(subscription));
  }, [cart, subscription]);

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const handleAddToSubscription = (product) => {
    if (subscription.length < 3) {
      setSubscription([...subscription, product]);
    } else {
      alert('Only three products can be added to monthly subscription.');
    }
  };

  const handleRemoveFromSubscription = (productId) => {
    setSubscription(subscription.filter(product => product.id !== productId));
  };
  
  return (
    <div className="App">
      <CatForm setCatDetails={setCatDetails} />
      <ProductList catDetails={catDetails} handleAddToCart={handleAddToCart} handleAddToSubscription={handleAddToSubscription} />
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      <Subscription subscription={subscription} handleRemoveFromSubscription={handleRemoveFromSubscription} />
    </div>
  );
};


export default Shop;
