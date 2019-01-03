import React, { PureComponent } from 'react'
import {
  Form,
  Container,
  Header,
  Input,
  Button,
  Message
} from 'semantic-ui-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const REGISTER_MUTATION = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    register(username: $username, email: $email, password: $password) {
      ok
      errors {
        path
        message
      }
    }
  }
`

export class Register extends PureComponent {
  initialState = {
    loading: false,
    username: '',
    email: '',
    password: '',
    usernameError: '',
    emailError: '',
    passwordError: ''
  }

  clearErrors = {
    usernameError: '',
    emailError: '',
    passwordError: ''
  }

  state = this.initialState

  onInputChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  onSubmit = () => {
    const { email, username, password } = this.state

    this.setState({ ...this.clearErrors, loading: true }, async () => {
      try {
        const response = await this.props.mutate({
          variables: { username, email, password }
        })

        const { ok, errors } = response.data.register

        if (ok) {
          this.props.history.replace('/')
        } else {
          const err = {}

          errors.forEach(({ path, message }) => {
            err[`${path}Error`] = message
          })

          this.setState({ loading: false, ...err })
        }
      } catch (err) {
        console.error(err)
      }
    })
  }

  renderContent = () => {
    const {
      email,
      username,
      password,
      usernameError,
      emailError,
      passwordError
    } = this.state

    if (false) {
      return <h1>Something went wrong</h1>
    }

    const errorMessages = []

    if (usernameError) errorMessages.push(usernameError)
    if (passwordError) errorMessages.push(passwordError)
    if (emailError) errorMessages.push(emailError)

    return (
      <Container text>
        <Header>Sign Up:</Header>

        <Form>
          <Form.Field error={!!usernameError}>
            <Input
              name="username"
              placeholder="Username"
              fluid
              value={username}
              onChange={this.onInputChange}
            />
          </Form.Field>
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
            loading={this.state.loading}
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

  render() {
    return this.renderContent()
  }
}

export default graphql(REGISTER_MUTATION)(Register)
