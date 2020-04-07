import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import ContentWithSidebar from '../../components/ContentWithSidebar'
import FaqNav from '../../components/FaqNav'
import PageHeader from '../../components/PageHeader'
import s from './index.module.scss'
import { attributes as faq } from '../../content/faq.md'

const Item = i => (
  <div key={i.title} className={s.question}>
    <h3 id={i.hash} className={s.header}>
      {i.title}
    </h3>
    <div dangerouslySetInnerHTML={{ __html: i.body }} className={s.body} />
  </div>
)

export default () => {
  useEffect(
    () => ReactGA.pageview(window.location.pathname + window.location.search),
    []
  )

  return (
    <>
      <PageHeader>
        <h1 className={s.pageHeader}>{faq.title}</h1>
        <p>{faq.subtitle}</p>
      </PageHeader>
      <ContentWithSidebar reverse className={s.contentWrapper}>
        <div style={{ maxWidth: '750px' }} className={s.content}>
          {faq.questions.map(Item)}
        </div>
        <FaqNav className={s.faqWrapper} />
      </ContentWithSidebar>
    </>
  )
}
