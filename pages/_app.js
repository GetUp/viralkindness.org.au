import ReactGoogleMapLoader from 'react-google-maps-loader'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import './app.scss'

const mapParams = {
  key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  libraries: 'places'
}

export default function MyApp ({ Component, pageProps }) {
  return (
    <ReactGoogleMapLoader
      params={mapParams}
      render={mapLoaded =>
        mapLoaded && (
          <>
            <Nav />
            <Component {...pageProps} />
            <Footer />
          </>
        )
      }
    />
  )
}
