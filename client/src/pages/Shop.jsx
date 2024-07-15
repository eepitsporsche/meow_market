// import React, { useState, useEffect } from 'react';
// import CatForm from '../components/ShopPage/CatForm';
// import ProductList from '../components/ShopPage/ProductList';
// import Cart from '../components/ShopPage/Cart';
// import productsData from '../data/products';
// import Subscription from '../components/ShopPage/Subscription';

// function Shop() {
//   const [catDetails, setCatDetails] = useState({});
//   const [cart, setCart] = useState([]);
//   const [subscription, setSubscription] = useState([]);

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart'));
//     const savedSubscription = JSON.parse(localStorage.getItem('subscription'));
//     if (savedCart) setCart(savedCart);
//     if (savedSubscription) setSubscription(savedSubscription);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//     localStorage.setItem('subscription', JSON.stringify(subscription));
//   }, [cart, subscription]);

//   const handleAddToCart = (product) => {
//     setCart(prevCart => {
//       const existingProduct = prevCart.find(item => item.id === product.id);
//       if (existingProduct) {
//         return prevCart.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const handleRemoveFromCart = (productId) => {
//     setCart(prevCart => prevCart.filter(item => item.id !== productId));
//   };

//   const handleUpdateCartQuantity = (productId, quantity) => {
//     setCart(prevCart => prevCart.map(item =>
//       item.id === productId ? { ...item, quantity: quantity } : item
//     ));
//   };

//   const handleAddToSubscription = (product) => {
//     if (subscription.length < 3) {
//       setSubscription(prevSubscription => [...prevSubscription, { ...product, quantity: 1 }]);
//     } else {
//       alert('Only three products can be added to monthly subscription.');
//     }
//   };

//   const handleRemoveFromSubscription = (productId) => {
//     // Find the index of the first occurrence of the product with given id
//     const indexToRemove = subscription.findIndex(item => item.id === productId);
//     if (indexToRemove !== -1) {
//       // Remove the product at the found index
//       setSubscription(prevSubscription => {
//         const newSubscription = [...prevSubscription];
//         newSubscription.splice(indexToRemove, 1);
//         return newSubscription;
//       });
//     }
//   };

//   return (
//     <div className="App">
//       <CatForm setCatDetails={setCatDetails} />
//       <ProductList catDetails={catDetails} handleAddToCart={handleAddToCart} handleAddToSubscription={handleAddToSubscription} />
//       <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} handleUpdateCartQuantity={handleUpdateCartQuantity} />
//       <Subscription subscription={subscription} handleRemoveFromSubscription={handleRemoveFromSubscription} />
//     </div>
//   );
// };



// export default Shop;
