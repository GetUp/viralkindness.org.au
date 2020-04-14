import React from 'react'
import Markdown from '../../components/Markdown'
import ContentWithSidebar from '../../components/ContentWithSidebar'
import PageHeader from '../../components/PageHeader'
import s from './index.module.scss'
import { attributes as c } from '../../content/start-a-group.md'
import SideNav from '../../components/SideNav'

const Item = i => (
  <div key={i.title} className={s.question}>
    <h2 id={i.hash} className={s.header}>
      {i.title}
    </h2>
    <Markdown className={s.text}>{i.text}</Markdown>
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
          <hr />
          <br />
          <h1 className={s.pageHeader}>{c.faqTitle}</h1>
          {c.faqs.map(Item)}
        </div>
        <div>
          <SideNav
            data={c.steps}
            route='start-a-group'
            header='Starting a Group'
          />
          <br />
          <br />
          <SideNav data={c.faqs} route='start-a-group' header='FAQs' />
        </div>
      </ContentWithSidebar>
    </>
  )
}
