import React from 'react'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import ContentWithSidebar from '../components/ContentWithSidebar'

export default () => {
  return (
    <>
      <div>
        <PageHeader>
          <h1>Contact Us</h1>
        </PageHeader>
        <ContentWithSidebar>
          <div>
            <p>
              Having trouble joining a group? Spotted something that we could
              make better? Let us know!
            </p>

            <p>
              <a href='mailto:viralkindness@getup.org.au'>
                Email us at viralkindness@getup.org.au
              </a>{' '}
              and we’ll get back to you shortly.
            </p>
          </div>
        </ContentWithSidebar>
      </div>
      <Footer />
    </>
  )
}
