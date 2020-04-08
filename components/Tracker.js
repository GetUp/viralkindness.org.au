import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { useRouter } from 'next/router'
import { usePrevious } from './usePrevious'

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS)

const page = (location = window.location) => location.pathname + location.search

const recordPageView = page => {
  if (window.location.host === 'viralkindness.org.au') {
    ReactGA.set({ page: page })
    ReactGA.pageview(page)
  }
}

export default ({ children }) => {
  const location = useRouter()
  const prevLocation = usePrevious(location) || { pathname: '' }
  useEffect(() => {
    if (location.pathname !== prevLocation.pathname) {
      recordPageView(page(location))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])
  return <>{children}</>
}
