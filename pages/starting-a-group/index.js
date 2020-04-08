import React from 'react'
import ContentWithSidebar from '../../components/ContentWithSidebar'
import FaqNav from '../../components/FaqNav'
import PageHeader from '../../components/PageHeader'
import s from './index.module.scss'
import { attributes as c } from '../../content/starting-a-group.md'

const Item = i => (
  <div key={i.title} className={s.question}>
    <h2 id={i.hash} className={s.header}>
      {i.title}
    </h2>
    <div dangerouslySetInnerHTML={{ __html: i.text }} className={s.body} />
  </div>
)

export default () => {
  return (
    <>
      <PageHeader>
        <h1 className={s.pageHeader}>{c.title}</h1>
        <p>{c.subtitle}</p>
      </PageHeader>
      <ContentWithSidebar reverse className={s.contentWrapper}>
        <div style={{ maxWidth: '750px' }} className={s.content}>
          {c.steps.map(Item)}
        </div>
      </ContentWithSidebar>
    </>
  )
}
