import React from 'react'
import PageHeader from '../../components/PageHeader'
import ContentWithSidebar from '../../components/ContentWithSidebar'
import { attributes, react as Content } from '../../content/contact.md'

export default () => {
  return (
    <>
      <div>
        <PageHeader>
          <h1>{attributes.title}</h1>
        </PageHeader>
        <ContentWithSidebar>
          <div>
            <Content />
          </div>
        </ContentWithSidebar>
      </div>
    </>
  )
}
