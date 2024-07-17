import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { useNavigate } from 'react-router-dom';
import './cartIcon.css';

const Cart = () => {
  const [state] = useStoreContext();
  const navigate = useNavigate();

  function getTotalQuantity() {
    let total = 0;
    state.cart.forEach((item) => {
      total += item.purchaseQuantity;
    });
    return total;
  }

  function handleCartClick() {
    navigate('/cart');
  }

  return (
    <div className='cartContainer' onClick={handleCartClick}>
      <span role="img" aria-label="cart" className="fas fa-shopping-cart">
       ({getTotalQuantity()})
      </span>
    </div>
  );
};

export default Cart;
