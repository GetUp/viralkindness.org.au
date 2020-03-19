import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { HashLink as Link } from 'react-router-hash-link'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import ContentWithSidebar from '../components/ContentWithSidebar'
import thumbnail from '../assets/images/download-preview.jpg'

export default () => {
  useEffect(
    () => ReactGA.pageview(window.location.pathname + window.location.search),
    []
  )

  return (
    <>
      <div>
        <PageHeader>
          <h1>Resources</h1>
        </PageHeader>
        <ContentWithSidebar>
          <div>
            <h2>Community Care Postcards</h2>
            <p>
              There are lots of ways to check in with people we know while
              maintaining safe social distancing — from a quick call, to a
              WhatsApp message.
            </p>
            <p>
              But for people who are more isolated, or who we don’t know as
              well, we need to think outside the box.
            </p>
            <p>
              Across the UK and Australia, people are putting notes, letters and
              postcards in their neighbours’ letterboxes to offer assistance
              with everyday things such as picking up groceries, getting
              medication or even walking the dog.
            </p>
            <p>
              By helping out, we can support people most at risk while they
              self-isolate or choose to keep a safe social distance — older
              people, those with underlying health conditions and people whose
              immune system is compromised.
            </p>
            <p>
              {/* eslint-disable-next-line */}
              <a
                href='https://www.getup.org.au/postcards'
                target='_blank'
                style={{
                  width: '100%',
                  textAlign: 'center',
                  display: 'block',
                  pointerEvents: 'cursor'
                }}
              >
                <div
                  style={{
                    padding: '16px',
                    borderRadius: '4px',
                    maxWidth: '300px',
                    margin: '0 auto'
                  }}
                >
                  <img
                    src={thumbnail}
                    style={{
                      width: '100%'
                    }}
                  />
                </div>
                Download the postcards to print at home
              </a>
            </p>

            <h3>How to use the postcards:</h3>
            <ol>
              <li>
                Print off postcards from the link above - follow the
                instructions in the document above. Remember to wash your hands.
              </li>
              <li>
                Add in your name, street address or suburb, and contact number.
              </li>
              <li>
                Select from the list of options how you are able to help your
                community.
              </li>
              <li>
                After waiting 24 hours (
                <Link smooth to='#note'>
                  see note
                </Link>
                ), wash hands or wear gloves to drop postcards in letterboxes
                around your neighbourhood.
              </li>
            </ol>

            <h3>Tips:</h3>
            <ul>
              <li>
                <strong>Availability.</strong> Feel free to include details of
                when it is best to call or text on the card, especially if you
                are working or have other commitments.
              </li>
              <li>
                <strong>Start small.</strong> Whether you’re working with a
                large group, or helping on your own, hand out a small amount of
                postcards to begin with and increase over time. That way if
                multiple people in your neighbourhood need help, you won’t be
                overwhelmed.
              </li>
              <li>
                <strong>Connect with others!</strong>{' '}
                <Link smooth to='/#groupSearch'>
                  Check the #ViralKindness hub
                </Link>{' '}
                for others helping in similar ways in your area. Not only will
                it avoid double up, you could team up to help more people!
              </li>
            </ul>

            <h3 id='note'>Note:</h3>
            <p>
              Coronavirus is spread person to person - but can be spread by
              touching surfaces.{' '}
              <a
                href='https://www.sbs.com.au/news/the-coronavirus-can-persist-in-air-for-hours-and-on-surfaces-for-days-a-new-study-shows'
                target='_blank'
                rel='noopener noreferrer'
              >
                <strong>
                  New research shows the virus can survive on cardboard for up
                  to 24 hours.
                </strong>
              </a>{' '}
              If you feel unwell, or have had contact with someone who has
              tested positive for COVID-19, please <strong>do not</strong>{' '}
              deliver postcards until you have cleared the 14 day self-isolation
              period.
            </p>

            <h2>Setting up a community care group: What you need to know!</h2>
            <p>
              Adding a community care group in your local area is easy! Here are
              a few tips, tricks and things to think about when starting your
              group:
            </p>

            <h3>Where will you organise and communicate?</h3>
            <p>
              Facebook groups are an easy way to connect lots of people,
              alternatively Facebook Messenger or WhatsApp groups work too.
            </p>
            <p>
              If you choose to use Facebook, add a clear group description to
              the ‘About’ section of your page to help people decide if it's the
              group for them!
            </p>
            <p>
              Make the group ‘private’ <strong>not</strong> ‘secret’ or
              ‘public’. That way you can make sure only members of your
              community join.
            </p>

            <h3>Sharing the Load</h3>
            <p>
              If you’re part of a larger group, think about giving people
              different roles and ways to help share the work. That means more
              people can help add people to your group and moderate posts.
            </p>
            <p>
              For information on how to add additional Administrators for your
              group refer to the{' '}
              <a
                href='https://www.facebook.com/help/1686671141596230/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Facebook Help Center
              </a>
              .
            </p>

            <h3>Rules and Guidelines</h3>
            <p>
              You may want to set rules and guidelines for your group to follow.
              This can help you to define your purpose and create a safe and
              caring community. Here are some useful rules you could use: (with
              thanks to the Northern Beaches - Coronavirus Community Support
              Group).
            </p>
            <ol>
              <li>
                <h4>Be Kind and Courteous</h4>
                <p>
                  We're all in this together to create a supportive environment.
                  Let's treat everyone with respect. Healthy debates are
                  natural, but kindness is required.
                </p>
              </li>
              <li>
                <h4>No Hate Speech or Bullying</h4>
                <p>
                  Bullying of any kind isn't allowed. We will not tolerate
                  degrading comments about things like appearance, race,
                  religion, culture, sexual orientation, disability, gender or
                  identity.
                </p>
              </li>
              <li>
                <h4>No Promotions or Spam</h4>
                <p>
                  Please no advertising of group events at this time. Offering
                  or advertising of free services is accepted however
                  Self-promotion, spam and irrelevant links aren't allowed.
                </p>
              </li>
              <li>
                <h4>Respect Everyone’s Privacy</h4>
                <p>
                  Being part of this group requires mutual trust as there may be
                  personal information shared of a sensitive and private nature.
                  Any personal info shared in the group should stay in the
                  group.
                </p>
              </li>
              <li>
                <h4>No False or Misleading Posts</h4>
                <p>
                  Please no posts that may cause panic or have not been verified
                  by a reputable source. There is enough anxiety and uncertainty
                  in the media and this group is about uplifting the community.
                </p>
              </li>
              <li>
                <h4>No coronavirus memes</h4>
                <p>
                  There are other places for these posts and whilst we all have
                  a sense of humor, this is not the platform for these types of
                  jokes.
                </p>
              </li>
              <li>
                <h4>Please do not offer any members medical advice</h4>
                <p>
                  Please do not post home remedies or medical advice. Should a
                  member have symptoms, please share the following resources:{' '}
                  <a href='https://www.getup.org.au/covid19'>
                    https://www.getup.org.au/covid19
                  </a>
                </p>
              </li>
            </ol>
          </div>
        </ContentWithSidebar>
      </div>

      <Footer />
    </>
  )
}
