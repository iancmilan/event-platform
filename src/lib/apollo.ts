import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qfdsvf3nci01xnazpea32b/master',
  cache: new InMemoryCache()
})