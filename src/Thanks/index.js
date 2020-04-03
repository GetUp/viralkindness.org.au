import React from 'react'
import s from './index.module.scss'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import ContentWithSidebar from '../components/ContentWithSidebar'
import ShareModule from '../components/ShareModule'
import main from '../assets/images/viralkindness-4.jpg'

export default () => {
  return (
    <>
      <div>
        <PageHeader>
          <h1>Thanks for registering your group!</h1>
        </PageHeader>
        <ContentWithSidebar className={s.contentContainer}>
          <div>
            <p>
              Thanks for starting a community care group in your local area.
            </p>
            <p>
              Without question, the way we pull through coronavirus is together
              and by caring for those around us. To do that, we’re going to need
              everyone who can, to do a little more to help.
            </p>
            <p style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
              Can you share your group with family, friends and neighbours and
              encourage them to join you?
            </p>
            <img
              src={main}
              className={s.image}
              alt='A person dropping postcards in letterboxes'
            />
          </div>

          <ShareModule className={s.shareModule} />
        </ContentWithSidebar>
      </div>
      <Footer />
    </>
  )
}
