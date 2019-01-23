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

const createTeamMutation = gql`
  mutation($name: String!) {
    createTeam(name: $name) {
      ok
      errors {
        path
        message
      }
    }
  }
`

export class CreateTeam extends Component {
  constructor(props) {
    super(props)

    extendObservable(this, {
      name: '',
      loading: false,
      errors: {}
    })
  }

  onInputChange = e => {
    const { name, value } = e.target

    this[name] = value
  }

  onSubmit = async () => {
    const { name } = this

    this.loading = true

    let response = null

    try {
      response = await this.props.mutate({
        variables: { name }
      })
    } catch (err) {
      console.log(err)
      this.props.history.push('/login')
      return
    }

    this.loading = false

    const { ok, errors } = response.data.createTeam

    if (ok) {
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
      name,
      errors: { nameError }
    } = this

    const errorMessages = []

    if (nameError) errorMessages.push(nameError)

    return (
      <Container text>
        <Header>Create a team:</Header>

        <Form>
          <Form.Field error={!!nameError}>
            <Input
              name="name"
              placeholder="name"
              fluid
              value={name}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Button
            onClick={this.onSubmit}
            color={'green'}
            loading={this.loading}
          >
            Create team
          </Button>
        </Form>
        {errorMessages.length > 0 ? (
          <Message list={errorMessages} error />
        ) : null}
      </Container>
    )
  }
}

export default graphql(createTeamMutation)(observer(CreateTeam))
