import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './app.scss'
import Tracker from './Tracker'
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

function App() {
  return (
    <div>
      <Router>
        <Tracker>
          <ScrollTop>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/register' component={Register} />
              <Route path='/thanks' component={Thanks} />
              <Route path='/faq' component={Faq} />
              <Route path='/forum' component={Forum} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/resources' component={Resources} />
              <Route path='/create' component={Create} />
              <Route path='/lawsandsafety' component={Laws} />
            </Switch>
            <Banner />
          </ScrollTop>
        </Tracker>
      </Router>
    </div>
  )
}

export default App
