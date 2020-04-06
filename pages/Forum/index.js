import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
// import './index.scss'

const forumName = process.env.REACT_APP_FORUM_NAME

const loadMuutForum = () =>
  window.jQuery && window.muut && window.$('#forum').muut()

export default () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  useEffect(() => {
    if (!window.jQuery) {
      const script = document.createElement('script')
      script.async = true
      script.defer = true
      script.src = 'https://code.jquery.com/jquery.min.js'
      script.onload = loadMuutForum
      document.body.appendChild(script)
    }
  }, [])

  useEffect(() => {
    if (!window.muut) {
      const script = document.createElement('script')
      script.async = true
      script.defer = true
      script.src = 'https://cdn.muut.com/1/moot.min.js'
      script.onload = loadMuutForum
      document.body.appendChild(script)
    } else {
      loadMuutForum()
    }
  }, [])

  return (
    <>
      <div>
        <a id='forum' href={`https://muut.com/i/${forumName}`}>
          #ViralKindness
        </a>
      </div>
    </>
  )
}
