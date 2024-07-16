// import React, { useEffect, useState } from 'react';
// import productsData from '../../data/products';

// const ProductList = ({ catDetails, handleAddToCart, handleAddToSubscription }) => {
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     if (catDetails.breed) {
//       const filtered = productsData.filter(product => product.breed.toLowerCase() === catDetails.breed.toLowerCase());
//       setFilteredProducts(filtered);
//       setShowAll(filtered.length === 0);
//     }
//   }, [catDetails]);

//   const handleShowAllProducts = () => {
//     setFilteredProducts(productsData);
//     setShowAll(false);
//   };

//   return (
//     <div>
//       <h2>Products for {catDetails.breed}</h2>
//       {showAll ? (
//         <div>
//           <p>No products found for this breed.</p>
//           <button onClick={handleShowAllProducts}>Shop All Products</button>
//         </div>
//       ) : (
//         <ul>
//           {filteredProducts.map(product => (
//             <li key={product.id}>
//               {product.name} - {product.description} - ${product.price.toFixed(2)}
//               <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//               <button onClick={() => handleAddToSubscription(product)}>Add to Subscription</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ProductList;
