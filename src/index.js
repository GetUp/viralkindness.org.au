import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ReactGoogleMapLoader from 'react-google-maps-loader'
import App from './App'
import smoothscroll from 'smoothscroll-polyfill'

// needed for safari
smoothscroll.polyfill()

const mapParams = {
  key: 'AIzaSyDSqqjcb_6Xfrdj75v0a9wT-EGBTBhgxow',
  libraries: 'places'
}

ReactDOM.render(
  <ReactGoogleMapLoader
    params={mapParams}
    render={mapLoaded => mapLoaded && <App />}
  />,
  document.getElementById('root')
)
