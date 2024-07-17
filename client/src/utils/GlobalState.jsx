import React, { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from './reducers'; // Ensure correct import of your reducer

const StoreContext = createContext();
const { Provider } = StoreContext;

const useProductReducer = (initialState) => {
  return useReducer(reducer, initialState);
};

const StoreProvider = ({ value = [], ...props }) => {
  const initialState = {
    products: [],
    cart: JSON.parse(localStorage.getItem('cart')) || [], // Load cart state from localStorage
    cartOpen: false,
    categories: [],
    currentCategory: '',
  };

  const [state, dispatch] = useProductReducer(initialState);

  useEffect(() => {
    // Save cart state to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
