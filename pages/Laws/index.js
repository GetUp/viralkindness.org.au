import React, { useEffect } from 'react'
import s from './index.module.scss'
import ReactGA from 'react-ga'
import PageHeader from '../../components/PageHeader'
import ContentWithSidebar from '../../components/ContentWithSidebar'
import { attributes, react as Content } from './content.md'

export default () => {
  useEffect(
    () => ReactGA.pageview(window.location.pathname + window.location.search),
    []
  )

  return (
    <>
      <PageHeader>
        <h1 className={s.pageHeader}>Laws and Safety</h1>
      </PageHeader>
      <ContentWithSidebar>
        <Content />
      </ContentWithSidebar>
    </>
  )
}
