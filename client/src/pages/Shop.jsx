// client/src/pages/Shop.jsx
import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const GET_RECOMMENDED_PRODUCTS = gql`
  query getRecommendedProducts($breed: String!) {
    recommendedProducts(breed: $breed) {
      _id
      name
      description
      image
      price
    }
  }
`;

const Shop = () => {
  const [catName, setCatName] = useState('');
  const [catAge, setCatAge] = useState('');
  const [catBreed, setCatBreed] = useState('');
  const [getRecommendedProducts, { loading, data, error }] = useLazyQuery(GET_RECOMMENDED_PRODUCTS);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (catBreed) {
      getRecommendedProducts({ variables: { breed: catBreed } });
    } else {
      alert('Please enter a breed to get recommendations');
    }
    console.log(catBreed)
  };

  return (
    <div>
      <h2>Shop for Your Cat</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Get Recommendations</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading recommended products. Please try again.</p>}
      {data && data.recommendedProducts && (
        <div>
          <h3>Recommended Products</h3>
          <ul>
            {data.recommendedProducts.map((product) => (
              <li key={product._id}>
                <img src={`/images/${product.image}`} alt={product.name} width="50" />
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Shop;
