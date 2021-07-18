// Core
import { ApolloClient } from 'apollo-client';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

// GraphQL Server
const root = 'funded-pet-library.moonhighway.com';
const uri = `https://${root}`;
const httpLink = createHttpLink({
  uri
});

// Auth
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

// WS
const wsLink = new WebSocketLink({
  uri: `wss://${root}/graphql`,
  options: {
    reconnect: true
  }
});

// Cache initialization
const cache = new InMemoryCache();

const wrappedHttpLink = authLink.concat(httpLink);

const link = split(({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
    )
  },
  wsLink,
  wrappedHttpLink)

export const client = new ApolloClient({
  cache,
  link
});
