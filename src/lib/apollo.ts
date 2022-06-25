import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qfdsvf3nci01xnazpea32b/master',
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACESS_TOKEN}`
  },
  cache: new InMemoryCache()
})