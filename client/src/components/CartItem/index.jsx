import { useStoreContext } from "../../utils/GlobalState";
import { Link } from 'react-router-dom';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import "./cartItem.css";

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="cart-item">
      <div className="cart-item-image"> 

        <Link to={`/products/${item._id}`}>
          <img
            src={`/images/${item.image}`}
            alt=""
          />
        </Link>
      </div>
      <div className="cart-item-details">
        <div>{item.name}, &nbsp;&nbsp;${item.price}</div>
        <div>
          <span>Qty:</span>
          <input  className="cartQty"
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          &nbsp;&nbsp;
          <span
            className="trashIcon"
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            <i className="fas fa-trash-alt"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
