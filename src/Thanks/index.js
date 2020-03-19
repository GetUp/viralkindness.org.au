import React from 'react'
import s from './index.module.scss'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import ContentWithSidebar from '../components/ContentWithSidebar'
import ShareModule from '../components/ShareModule'

export default () => (
  <>
    <div>
      <PageHeader>
        <h1>Thanks for registering your group!</h1>
      </PageHeader>
      <ContentWithSidebar className={s.contentContainer}>
        <div>
          <p>Thanks for starting a community care group in your local area.</p>
          <p>
            Without question, the way we pull through coronavirus is together
            and by caring for those around us.
            <strong>
              To do that, we’re going to need everyone who can, to do a little
              more to help.
            </strong>
          </p>
          <p>
            Can you share your group with family, friends and neighbours and
            encourage them to join you?
          </p>
        </div>

        <ShareModule className={s.shareModule} />
      </ContentWithSidebar>
    </div>
    <Footer />
  </>
)
