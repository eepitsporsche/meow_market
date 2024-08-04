import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import "./shoppingCart.css";
import { Link } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51PdNpL2LQJGxym29iOD2XSI21vDGDasH8m6wVbZtvJCs2gBnJj3uflIbhvPsm5zmkQlTo7P9QDce59RGRwvMyl2X00UIKIpsMM"
);
const CartPage = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    getCheckout({
      variables: {
        products: state.cart.map((item) => ({
          _id: item._id,
          purchaseQuantity: item.purchaseQuantity,
          name: item.name,
          description: item.description,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
      },
    });
    console.log(getCheckout);
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="cart-total">
            <strong>Total: ${calculateTotal()}</strong>
          </div>

          <div className="cart-checkout">
            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(<Link style={{color: "rgb(188, 167, 224)"}} to="./login">Log-in</Link> to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </div>
      )}
    </div>
  );
};

export default CartPage;
