import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import Routes from './Routes'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink, from } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import 'semantic-ui-css/semantic.min.css'

const httpLink = createHttpLink({
  uri: '/graphql'
})

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('token')
//   const refreshToken = localStorage.getItem('refreshToken')
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       'x-token': token || '',
//       'x-refresh-token': refreshToken || ''
//     }
//   }
// })

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token')
  const refreshToken = localStorage.getItem('refreshToken')
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'x-token': token || '',
      'x-refresh-token': refreshToken || ''
    }
  }))

  return forward(operation)
})

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    const {
      response: { headers }
    } = operation.getContext()
    if (headers) {
      const token = headers.get('x-token')
      const refreshToken = headers.get('x-refresh-token')

      if (token) {
        localStorage.setItem('token', token)
      }

      if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken)
      }
    }

    return response
  })
})

const client = new ApolloClient({
  link: from([authMiddleware, afterwareLink, httpLink]),
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
