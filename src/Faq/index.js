import React from 'react'
// import { HashLink as Link } from 'react-router-hash-link'
import ContentWithSidebar from '../components/ContentWithSidebar'
import FaqNav from '../components/FaqNav'
import faq from '../data/faq'

const Item = i => (
  <div key={i.title}>
    <h3 id={i.hash}>{i.title}</h3>
    <div dangerouslySetInnerHTML={{ __html: i.body }} />
  </div>
)

export default () => (
  <div>
    <h1>{faq.title}</h1>
    <ContentWithSidebar>
      <FaqNav />
      <div>{faq.data.map(Item)}</div>
    </ContentWithSidebar>
  </div>
)
