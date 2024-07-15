import React, { useState } from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - Quantity: {product.quantity} -Price $
            {product.price}
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => handleRemoveFromCart(product.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
