import ReactGoogleMapLoader from 'react-google-maps-loader'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Tracker from '../components/Tracker'
import './app.scss'
import Banner from '../components/Banner'

const mapParams = {
  key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  libraries: 'places',
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Tracker>
        <ReactGoogleMapLoader
          params={mapParams}
          render={(mapLoaded) =>
            mapLoaded && (
              <>
                <Nav />
                <Component {...pageProps} />
                <Footer />
                <Banner />
              </>
            )
          }
        />
      </Tracker>
    </>
  )
}
