import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './app.scss'
import Header from './Header'
import Home from './Home'
import Register from './Register'
import Thanks from './Thanks'
import Faq from './Faq'
import About from './About'
import Contact from './Contact'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/thanks'>
            <Thanks />
          </Route>
          <Route path='/faq'>
            <Faq />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
