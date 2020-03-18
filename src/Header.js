import React from 'react'
import Nav from './components/Nav'
import Warning from './components/Warning'

export default () => (
  <header>
    <Nav />
    <Warning href='https://getup.org.au'>COVID-19: What you need to do</Warning>
  </header>
)
