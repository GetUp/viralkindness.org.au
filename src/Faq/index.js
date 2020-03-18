import React from 'react'
// import { HashLink as Link } from 'react-router-hash-link'
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

export default () => (
  <>
    <PageHeader>
      <h1>{faq.title}</h1>
    </PageHeader>
    <ContentWithSidebar reverse style={{ marginTop: '24px' }}>
      <FaqNav />
      <div style={{ maxWidth: '750px', marginLeft: 'auto' }}>
        {faq.data.map(Item)}
      </div>
    </ContentWithSidebar>
    <Footer />
  </>
)
