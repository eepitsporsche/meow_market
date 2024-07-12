import React from 'react';

const Subscription = ({ subscription, handleRemoveFromSubscription }) => {
  return (
    <div>
      <h2>Monthly Subscription</h2>
      <ul>
        {subscription.map(product => (
          <li key={product.id}>
            {product.name} - Quantity: {product.quantity}
            <button onClick={() => handleRemoveFromSubscription(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subscription;
