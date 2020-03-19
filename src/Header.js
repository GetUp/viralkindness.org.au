import React from 'react'
import Nav from './components/Nav'
import Warning from './components/Warning'

export default () => (
  <header>
    <Warning href='https://www.getup.org.au/covid19'>
      Coronavirus (COVID-19): What you need to do
    </Warning>
    <Nav />
  </header>
)
