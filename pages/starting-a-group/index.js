import React from 'react'
import Markdown from '../../components/Markdown'
import ContentWithSidebar from '../../components/ContentWithSidebar'
import FaqNav from '../../components/FaqNav'
import PageHeader from '../../components/PageHeader'
import s from './index.module.scss'
import { attributes as c } from '../../content/starting-a-group.md'

const Item = (i) => (
  <div key={i.title} className={s.question}>
    <h2 id={i.hash} className={s.header}>
      {i.title}
    </h2>
    <Markdown>{i.text}</Markdown>
  </div>
)

export default () => {
  return (
    <>
      <PageHeader>
        <h1 className={s.pageHeader}>{c.title}</h1>
        <Markdown>{c.subtitle}</Markdown>
      </PageHeader>
      <ContentWithSidebar reverse className={s.contentWrapper}>
        <div style={{ maxWidth: '750px' }} className={s.content}>
          {c.steps.map(Item)}
        </div>
      </ContentWithSidebar>
    </>
  )
}
