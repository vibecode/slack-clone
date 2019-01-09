import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import CreateTeam from './CreateTeam'

const Routes = props => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/lol" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/create-team" component={CreateTeam} />
      </Switch>
    </Router>
  )
}

export default Routes
