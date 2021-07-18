// Core
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// GraphQL Server
//const root = 'funded-pet-library.moonhighway.com';
const uri = 'http://localhost:4000';

const link = createHttpLink({
  uri,
  credentials: 'include'
});

// Cache initialization
const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache,
  link
});
