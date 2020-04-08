import React, { useEffect } from 'react'
import s from './index.module.scss'
import ReactGA from 'react-ga'
import PageHeader from '../../components/PageHeader'
import ContentWithSidebar from '../../components/ContentWithSidebar'
import { attributes, react as Content } from '../../content/lawsandsafety.md'

export default () => {
  useEffect(
    () => ReactGA.pageview(window.location.pathname + window.location.search),
    []
  )

  return (
    <>
      <PageHeader>
        <h1 className={s.pageHeader}>{attributes.header}</h1>
        <p>{attributes.subheader}</p>
      </PageHeader>
      <ContentWithSidebar>
        <Content />
      </ContentWithSidebar>
    </>
  )
}
