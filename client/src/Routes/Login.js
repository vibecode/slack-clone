import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { extendObservable } from 'mobx'
import {
  Message,
  Form,
  Container,
  Header,
  Input,
  Button
} from 'semantic-ui-react'
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
      password: '',
      loading: false,
      errors: {}
    })
  }

  onInputChange = e => {
    const { name, value } = e.target

    this[name] = value
  }

  onSubmit = async () => {
    const { email, password } = this

    this.loading = true

    const response = await this.props.mutate({
      variables: { email, password }
    })

    this.loading = false

    const { ok, token, refreshToken, errors } = response.data.login

    if (ok) {
      localStorage.setItem('token', token)
      localStorage.setItem('refreshToken', refreshToken)
      this.props.history.replace('/')
    } else {
      const err = {}

      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message
      })

      this.errors = err
    }
  }

  render() {
    const {
      email,
      password,
      errors: { emailError, passwordError }
    } = this

    const errorMessages = []

    if (emailError) errorMessages.push(emailError)
    if (passwordError) errorMessages.push(passwordError)

    return (
      <Container text>
        <Header>Login:</Header>

        <Form>
          <Form.Field error={!!emailError}>
            <Input
              name="email"
              placeholder="Email"
              fluid
              value={email}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field error={!!passwordError}>
            <Input
              name="password"
              placeholder="Password"
              type="password"
              fluid
              value={password}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Button
            onClick={this.onSubmit}
            color={'green'}
            loading={this.loading}
          >
            Submit
          </Button>
        </Form>
        {errorMessages.length > 0 ? (
          <Message list={errorMessages} error />
        ) : null}
      </Container>
    )
  }
}

export default graphql(loginMutation)(observer(Login))
