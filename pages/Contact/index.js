import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import PageHeader from '../../components/PageHeader'
import ContentWithSidebar from '../../components/ContentWithSidebar'
import { attributes, react as Content } from '../../content/contact.md'

export default () => {
  useEffect(
    () => ReactGA.pageview(window.location.pathname + window.location.search),
    []
  )

  return (
    <>
      <div>
        <PageHeader>
          <h1>{attributes.title}</h1>
        </PageHeader>
        <ContentWithSidebar>
          <div>
            <Content />
          </div>
        </ContentWithSidebar>
      </div>
    </>
  )
}
