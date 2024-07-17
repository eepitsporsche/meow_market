import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import AuthService from '../utils/auth';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      try {
        const cart = await idbPromise('cart', 'get');
        const products = cart.map((item) => item._id);

        if (products.length) {
          const { data } = await addOrder({ variables: { products } });
          const productData = data.addOrder.products;

          // Clear items from IndexedDB
          productData.forEach((item) => {
            idbPromise('cart', 'delete', item._id);
          });

          // Clear the cart from localStorage
          AuthService.saveCart([]);
        }

        setTimeout(() => {
          window.location.assign('/');
        }, 3000);
      } catch (error) {
        console.error('Error processing order:', error);
        // Handle error as needed
      }
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <h1>Success!</h1>
      <h2>Thank you for your purchase!</h2>
      <h2>You will now be redirected to the home page</h2>
    </div>
  );
}

export default Success;
