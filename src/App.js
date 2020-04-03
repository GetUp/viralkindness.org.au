import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './app.scss'
import ScrollTop from './components/ScrollTop'
import Header from './Header'
import Home from './Home'
import Register from './Register'
import Thanks from './Thanks'
import Faq from './Faq'
import About from './About'
import Contact from './Contact'
import Resources from './Resources'
import Create from './Create'
import Forum from './Forum'
import Banner from './components/Banner'
import Laws from './Laws'

function App () {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS)
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div>
      <Router>
        <ScrollTop>
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
            <Route path='/forum'>
              <Forum />
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
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/lawsandsafety'>
              <Laws />
            </Route>
          </Switch>
          <Banner />
        </ScrollTop>
      </Router>
    </div>
  )
}

export default App
