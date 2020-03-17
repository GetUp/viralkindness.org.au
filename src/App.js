import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './App.css'
import Header from './Header'
import Home from './Home'
import Register from './Register'
import Join from './Join'
import Faq from './Faq'

function App () {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/join'>
            <Join />
          </Route>
          <Route path='/faq'>
            <Faq />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
