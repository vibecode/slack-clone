import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const allUsersQuery = gql`
  {
    allUsers {
      username
    }
  }
`

const Home = () => {
  return (
    <Query query={allUsersQuery}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error</p>

        return data.allUsers.map(({ username, id }) => (
          <p key={id}>i'm here: {username}</p>
        ))
      }}
    </Query>
  )
}

export default Home
