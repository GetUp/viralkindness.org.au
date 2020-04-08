import React from 'react'
import PageHeader from '../../components/PageHeader'
import ContentWithSidebar from '../../components/ContentWithSidebar'
import { attributes, react as Content } from '../../content/about.md'

export default () => (
  <>
    <PageHeader>
      <h1>{attributes.title}</h1>
    </PageHeader>
    <ContentWithSidebar>
      <div>
        <Content />
      </div>
    </ContentWithSidebar>
  </>
)
