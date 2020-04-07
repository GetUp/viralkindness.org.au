import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import s from './index.module.scss'
import PageHeader from '../../components/PageHeader'
import ContentWithSidebar from '../../components/ContentWithSidebar'
import ShareModule from '../../components/ShareModule'
import main from '../../assets/images/viralkindness-4.jpg'
import { attributes, react as Content } from '../../content/thanks.md'

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
        <ContentWithSidebar className={s.contentContainer}>
          <div>
            <Content />
            <img
              src={main}
              className={s.image}
              alt='A person dropping postcards in letterboxes'
            />
          </div>

          <ShareModule className={s.shareModule} />
        </ContentWithSidebar>
      </div>
    </>
  )
}
