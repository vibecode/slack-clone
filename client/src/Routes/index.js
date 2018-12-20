import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Register from './Register'

const Routes = props => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/lol" component={Home} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  )
}

export default Routes
