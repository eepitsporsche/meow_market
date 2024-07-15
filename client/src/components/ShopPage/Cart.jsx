// import React from 'react';

// const Cart = ({ cart, handleRemoveFromCart, handleUpdateCartQuantity }) => {
//   return (
//     <div>
//       <h2>Cart</h2>
//       <ul>
//         {cart.map(product => (
//           <li key={product.id}>
//             {product.name} - ${product.price.toFixed(2)}
//             <input
//               type="number"
//               value={product.quantity}
//               min="1"
//               onChange={(e) => handleUpdateCartQuantity(product.id, parseInt(e.target.value, 10))}
//             />
//             <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;
