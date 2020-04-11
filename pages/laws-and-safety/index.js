import React from 'react'
import s from './index.module.scss'
import PageHeader from '../../components/PageHeader'
import ContentWithSidebar from '../../components/ContentWithSidebar'
import { attributes, react as Content } from '../../content/laws-and-safety.md'

export default () => {
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
