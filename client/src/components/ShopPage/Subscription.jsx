import React from 'react';

const Subscription = ({ subscription, handleRemoveFromSubscription }) => {
  return (
    <div>
      <h2>Monthly Subscription</h2>
      <ul>
        {subscription.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => handleRemoveFromSubscription(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subscription;
