import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav';
import Footer from './pages/Footer';
import { StoreProvider } from './utils/GlobalState';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const location = useLocation();

  // Log the current location for debugging
  useEffect(() => {
    console.log('Current location:', location.pathname);
  }, [location]);

  // Determine if the current location is the home page
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <Nav />
        <Outlet />
        {isHomePage && <Footer />}
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;
