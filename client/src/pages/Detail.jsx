import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';

import "./detail.css";

function Detail() {
  const [state, dispatch] = useStoreContext();
  const [cartMessageAdd, setCartMessageAdd] = useState('');
  const [cartMessageRemove, setCartMessageRemove] = useState('');
  const timerId = useRef(null);
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });

      setCartMessageAdd('Item added to cart!');
      setTimeout(() => {
        setCartMessageAdd('');
      }, 2000); // Clear the message after 2 seconds
      return () => {
        //Clear the timeout
        clearTimeout(timerId.current);
    };

    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
    
    setCartMessageRemove('Item removed from cart!');
    setTimeout(() => {
      setCartMessageRemove('');
    }, 2000); // Clear the message after 2 seconds
    return () => {
      //Clear the timeout
      clearTimeout(timerId.current);
    };
  };

  return (
    <>
      {currentProduct && cart ? (
        <div className="container my-1 productDetailContainer">
          <button><Link to="/shop">← Back to Products</Link></button>

          <h2>{currentProduct.name}</h2>

          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />

          <p className="productDescription">{currentProduct.description}</p>

          <p className="productDetailPrice">
            <strong>Price: </strong>${currentProduct.price}{' '}

            <button onClick={addToCart}>Add to Cart</button>
            {cartMessageAdd && <p>{cartMessageAdd}</p>}

            <button
              disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
            {cartMessageRemove && <p>{cartMessageRemove}</p>}
          </p>
        </div>
      ) : null}
      <Cart />
    </>
  );
}

export default Detail;
