import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './app.scss'
import Header from './Header'
import Home from './Home'
import Register from './Register'
import Thanks from './Thanks'
import Faq from './Faq'
import About from './About'
import Contact from './Contact'
import Resources from './Resources'

function App() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize('UA-2555375-39')
      ReactGA.pageview(window.location.pathname + window.location.search)
      window.GA_INITIALIZED = true
    }
  }, [])

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
          <Route path='/resources'>
            <Resources />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
