import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { extendObservable } from 'mobx'
import { Form, Container, Header, Input, Button } from 'semantic-ui-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      refreshToken
      errors {
        path
        message
      }
    }
  }
`

export class Login extends Component {
  constructor(props) {
    super(props)

    extendObservable(this, {
      email: '',
      password: ''
    })
  }

  onInputChange = e => {
    const { name, value } = e.target

    this[name] = value
  }

  onSubmit = async () => {
    const { email, password } = this

    const response = await this.props.mutate({
      variables: { email, password }
    })

    const { ok, token, refreshToken } = response.data.login

    if (ok) {
      localStorage.setItem('token', token)
      localStorage.setItem('refreshToken', token)
    }
  }

  render() {
    return (
      <Container text>
        <Header>Login:</Header>

        <Form>
          <Form.Field error>
            <Input
              name="email"
              placeholder="Email"
              fluid
              value={this.email}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field error>
            <Input
              name="password"
              placeholder="Password"
              type="password"
              fluid
              value={this.password}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Button
            onClick={this.onSubmit}
            color={'green'}
            // loading={this.state.loading}
          >
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}

export default graphql(loginMutation)(observer(Login))
