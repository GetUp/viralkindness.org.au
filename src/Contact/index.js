import React from 'react'
import Footer from '../components/Footer'

export default () => (
  <>
    <div>
      <h1>Contact Us</h1>
      <p style={{ backgroundColor: '#ff00f7' }}>
        Having trouble joining a group? Spotted something that we could make
        better? Let us know!
      </p>

      <p style={{ backgroundColor: '#ff00f7' }}>
        <a href='mailto:viralkindness@getup.org.au'>
          Email us at viralkindness@getup.org.au
        </a>{' '}
        and we’ll get back to you shortly.
      </p>
    </div>
    <Footer />
  </>
)
