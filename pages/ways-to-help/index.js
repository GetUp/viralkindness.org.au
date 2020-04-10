import React from 'react'
import Markdown from '../../components/Markdown'
import ContentWithSidebar from '../../components/ContentWithSidebar'
import FaqNav from '../../components/FaqNav'
import PageHeader from '../../components/PageHeader'
import s from './index.module.scss'
import { attributes as c } from '../../content/ways-to-help.md'

const Item = (i) => (
  <div key={i.title} className={s.question}>
    <h3 id={i.hash} className={s.header}>
      {i.title}
    </h3>
    <Markdown>{i.answer}</Markdown>
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
          {c.questions.map(Item)}
        </div>
        <FaqNav className={s.faqWrapper} />
      </ContentWithSidebar>
    </>
  )
}
