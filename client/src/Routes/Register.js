import React, { PureComponent } from 'react'
import { Container, Header, Input, Button } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const REGISTER = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    register(username: $username, email: $email, password: $password) {
      username
    }
  }
`

export class Register extends PureComponent {
  initialState = {
    username: '',
    email: '',
    password: ''
  }

  state = this.initialState

  onInputChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  onSubmit = async register => {
    try {
      await register({
        variables: { ...this.state }
      })
    } catch (err) {
      console.log(err)
    }

    this.setState(this.initialState)
  }

  renderContent = (register, { error, loading }) => {
    const { email, username, password } = this.state

    if (error) {
      return <h1>Something went wrong</h1>
    }

    return (
      <Container>
        <Header>Sign Up:</Header>
        <Input
          name="username"
          placeholder="Username"
          fluid
          value={username}
          onChange={this.onInputChange}
        />
        <Input
          name="email"
          placeholder="Email"
          fluid
          value={email}
          onChange={this.onInputChange}
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          fluid
          value={password}
          onChange={this.onInputChange}
        />
        <Button
          onClick={() => this.onSubmit(register)}
          color={'green'}
          loading={loading}
        >
          Submit
        </Button>
      </Container>
    )
  }

  render() {
    return <Mutation mutation={REGISTER}>{this.renderContent}</Mutation>
  }
}

export default Register
