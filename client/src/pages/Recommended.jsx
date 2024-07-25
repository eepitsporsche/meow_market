import React, { useState } from 'react';
import { useLazyQuery} from '@apollo/client';
import { useStoreContext } from '../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../utils/actions';
import { idbPromise } from '../utils/helpers';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart';
import './recommended.css';
import  { GET_RECOMMENDED_PRODUCTS } from '../utils/queries'


const Recommended = () => {
  const [catName, setCatName] = useState('');
  const [catAge, setCatAge] = useState('');
  const [catBreed, setCatBreed] = useState('');
  const [getRecommendedProducts, { loading, data, error }] = useLazyQuery(GET_RECOMMENDED_PRODUCTS);
  const [state, dispatch] = useStoreContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted:', { catName, catAge, catBreed });

    const breedLowerCase = catBreed.toLowerCase();

    if (breedLowerCase) {
      getRecommendedProducts({ variables: { breed: breedLowerCase } });
    } else {
      alert('Please enter a breed to get recommendations.');
    }
  };

  const addToCart = (product) => {
    const itemInCart = state.cart.find((cartItem) => cartItem._id === product._id);

    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: product._id,
        purchaseQuantity: itemInCart.purchaseQuantity + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: itemInCart.purchaseQuantity + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...product, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...product, purchaseQuantity: 1 });
    }
  };

  // Display logic for loading and errors
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading recommended products. Please try again.</p>;

  // Handle display of no products found message
  let noProductsFoundMessage = null;
  if (!loading && data && data.recommendedProducts) {
    if (data.recommendedProducts.length === 0) {
      noProductsFoundMessage = <p className='nothingFound'>No recommended products found for {catName}</p>;
    }
  }

  return (
    <div className='recommendationContainer'>
      <Cart />
      <button>
        <Link to="/shop">Shop All Products</Link>
      </button>
      <h2>Shop for Your Cat</h2>
      <form onSubmit={handleSubmit}>
        <div className="catInfo">
          <div>
            <label>
              Cat Name:
              <input
                type="text"
                value={catName}
                onChange={(e) => setCatName(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Cat Age:
              <input
                type="number"
                value={catAge}
                onChange={(e) => setCatAge(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Cat Breed:
              <input
                type="text"
                value={catBreed}
                onChange={(e) => setCatBreed(e.target.value)}
                required
              />
            </label>
          </div>
        </div>
        <button type="submit">Get Recommendations</button>
      </form>
      {noProductsFoundMessage}
      {data && data.recommendedProducts && data.recommendedProducts.length > 0 && (
        <div>
          <h1 className='recommendedProducts'>Recommended Products for {catName}</h1>
          <ul className="products">
            {data.recommendedProducts.map((product) => (
              <li key={product._id}>
                <img src={`/images/${product.image}`} alt={product.name} width="50" />
                <p>{product.name}</p>
                {/* <p>{product.description}</p> */}
                <p>${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Recommended;
