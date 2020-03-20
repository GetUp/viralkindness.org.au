import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import ContentWithSidebar from '../components/ContentWithSidebar'
import FaqNav from '../components/FaqNav'
import faq from '../data/faq'
import PageHeader from '../components/PageHeader'
import s from './index.module.scss'
import Footer from '../components/Footer'

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
        <p>
          As more groups offer advice on what has worked well for them, we will
          update this FAQ page.
        </p>
      </PageHeader>
      <ContentWithSidebar reverse className={s.contentWrapper}>
        <div style={{ maxWidth: '750px' }} className={s.content}>
          {faq.data.map(Item)}
        </div>
        <FaqNav className={s.faqWrapper} />
      </ContentWithSidebar>
      <Footer />
    </>
  )
}
