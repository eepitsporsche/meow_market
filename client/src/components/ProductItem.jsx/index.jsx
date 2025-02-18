import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import React, { useState, useRef } from 'react';
import "./products.css";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();
  const [cartMessage, setCartMessage] = useState('');
  const timerId = useRef(null);

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });

    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }

    setCartMessage('Item added to cart!');
    setTimeout(() => {
      setCartMessage('');
    }, 2000); // Clear the message after 2 seconds
    return () => {
        //Clear the timeout
        clearTimeout(timerId.current);
    };
  }
  
  
  return (
    <div className="card px-1 py-1 productCard">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div>
      <button className="addToCartButton" onClick={addToCart}>Add to cart</button>
      {cartMessage && <p>{cartMessage}</p>}
    </div>
  );
}

export default ProductItem;
