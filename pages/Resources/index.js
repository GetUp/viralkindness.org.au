import React, { useEffect } from 'react'
import s from './index.module.scss'
import ReactGA from 'react-ga'
import Link from 'next/link'
import PageHeader from '../../components/PageHeader'
import ContentWithSidebar from '../../components/ContentWithSidebar'
import thumbnail from '../../assets/images/viralkindness-1.jpg'
import main from '../../assets/images/viralkindness-4.jpg'
import { Download, Add } from '../../components/Icons'
import { attributes, react as Content } from '../../content/resources.md'

const getId = title => title.toLowerCase().replace(/ /g, '-')

export default () => {
  useEffect(
    () => ReactGA.pageview(window.location.pathname + window.location.search),
    []
  )

  const insertBreakout = ({ title, sections, ...props }) => (
    <div className={s.breakoutContainer}>
      <h3>{title}</h3>
      {sections &&
        sections.map(i => (
          <>
            <h4 id={getId(i.title)}>{i.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: i.body }} />
          </>
        ))}
    </div>
  )

  const insertSection = ({ title, subtitle, body, sections }) => (
    <>
      <h2 id={getId(title)}>{title}</h2>
      <div
        className={s.subtitle}
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
      <p dangerouslySetInnerHTML={{ __html: body }} />
      {sections &&
        sections.map(i => (
          <>
            <h3 id={getId(i.title)}>{i.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: i.body }} />
          </>
        ))}
    </>
  )

  const insertSideNav = content => (
    <div>
      <p style={{ marginTop: '32px' }}>
        <b>Content</b>
      </p>
      <ul className={s.sideNav}>
        {content.map(c => (
          <li>
            <Link href={'#' + getId(c.title)}>
              <span className={s.sideNavHeader}>
                <a>{c.title}</a>
              </span>
            </Link>
            {c.sections && (
              <ul className={s.subSideNav}>
                {c.sections.map(s => (
                  <li>
                    <Link href={'#' + getId(s.title)}>
                      <a>{s.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <hr style={{ marginBottom: '16px', opacity: 0.4 }} />
        <li>
          {/* eslint-disable react/jsx-no-target-blank */}
          <a href='https://www.getup.org.au/postcards' target='_blank'>
            {/* eslint-enable react/jsx-no-target-blank */}
            Download Postcards
          </a>
        </li>
        <li>
          <Link href='/create'>
            <a>Make your Postcard</a>
          </Link>
        </li>
      </ul>
    </div>
  )

  return (
    <>
      <div>
        <PageHeader>
          <h1 className={s.pageHeader}>{attributes.title}</h1>
        </PageHeader>
        <ContentWithSidebar reverse>
          <div style={{ maxWidth: '700px' }}>
            {attributes.body.map(i => (
              <React.Fragment key={i.title}>
                {i.type !== 'breakout' ? insertSection(i) : insertBreakout(i)}
              </React.Fragment>
            ))}
          </div>
          {insertSideNav(attributes.body)}
        </ContentWithSidebar>
      </div>
    </>
  )

  return (
    <>
      <div>
        {console.log(attributes)}
        <PageHeader>
          <h1 className={s.pageHeader}>Resources</h1>
        </PageHeader>
        <ContentWithSidebar reverse>
          <div style={{ maxWidth: '700px' }}>
            <h2 id='postcards'>Community Care Postcards</h2>

            <p className={s.subtitle}>
              There are lots of ways to check in with people we know while
              maintaining safe social distancing — from a quick call, to a
              WhatsApp message.
            </p>
            <p className={s.subtitle}>
              But for people who are more isolated, or who we don’t know as
              well, we need to think outside the box.
            </p>
            <img
              src={main}
              alt='A person dropping postcards in letterboxes'
              className={s.mainImage}
            />
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
            <div className={s.breakoutContainer}>
              <h3>Postcards</h3>

              <h4 id='how-to-use-postcards'>How to use the postcards</h4>
              <ol>
                <li>
                  <Link href='/create'>
                    <a>Head here to fill in your postcards with details</a>
                  </Link>{' '}
                  <b>or</b> {/* eslint-disable-next-line */}
                  <a href='https://www.getup.org.au/postcards' target='_blank'>
                    print the postcards
                  </a>{' '}
                  and write how you can help. Remember to wash your hands first.
                </li>
                <li>
                  Add in your name, street address or suburb, and contact
                  number.
                </li>
                <li>
                  Select from the list of options how you are able to help your
                  community.
                </li>
                <li>
                  After waiting 24 hours (
                  <Link href='#note'>
                    <a>see note</a>
                  </Link>
                  ), wash hands or wear gloves to drop postcards in letterboxes
                  around your neighbourhood.
                </li>
              </ol>

              <hr className={s.hr} />
              <div className={s.downloadBtnContainers}>
                <Link href='/create'>
                  <a className={s.downloadPostcard}>
                    <Add />
                    Make your Postcard
                  </a>
                </Link>
                {/* eslint-disable react/jsx-no-target-blank */}
                <a
                  href='https://www.getup.org.au/postcards'
                  className={s.downloadPostcard}
                  target='_blank'
                >
                  {/* eslint-enable react/jsx-no-target-blank */}
                  <Download />
                  Download Postcards
                </a>
              </div>

              {/* eslint-disable-next-line */}
              <a href='https://www.getup.org.au/postcards' target='_blank'>
                <img
                  src={thumbnail}
                  alt='A person writing their details on the printable postcards'
                  className={s.image}
                />
              </a>

              <h4 id='tips'>Tips</h4>
              <ul>
                <li>
                  <strong>Availability.</strong> Feel free to include details of
                  when it is best to call or text on the card, especially if you
                  are working or have other commitments.
                </li>
                <li>
                  <strong>Start small.</strong> Whether you’re working with a
                  large group, or helping on your own, hand out a small amount
                  of postcards to begin with and increase over time. That way if
                  multiple people in your neighbourhood need help, you won’t be
                  overwhelmed.
                </li>
                <li>
                  <strong>Connect with others!</strong>{' '}
                  <Link smooth href='/#groupSearch'>
                    <a>Check the #ViralKindness hub</a>
                  </Link>{' '}
                  for others helping in similar ways in your area. Not only will
                  it avoid double up, you could team up to help more people!
                </li>
              </ul>

              <hr className={s.hr} />

              <h4 id='note'>Note</h4>
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
                deliver postcards until you have cleared the 14 day
                self-isolation period.
              </p>
            </div>

            <br />

            <h2 id='start-a-group'>Setting up a community care group</h2>
            <p className={s.subtitle}>
              Adding a community care group in your local area is easy! Here are
              a few tips, tricks and things to think about when starting your
              group:
            </p>

            <h3 className={s.heading3} id='organise'>
              Where will you organise and communicate?
            </h3>
            <p>
              Facebook groups are an easy way to connect lots of people,
              alternatively WhatsApp groups or NextDoor work too.
            </p>
            <p>
              For more information on starting a Facebook group, adding people
              to a WhatsApp group or using NextDoor, head here:
            </p>
            <ul>
              <li>
                <a
                  href='https://www.facebook.com/help/167970719931213'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <b>Facebook:</b> Start a Facebook Group
                </a>
              </li>
              <li>
                <a
                  href='https://faq.whatsapp.com/en/android/26000123/?category=5245251'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <b>WhatsApp:</b> (Android) How to create and invite people to
                  a group
                </a>
              </li>
              <li>
                <a
                  href='https://faq.whatsapp.com/en/iphone/26000115/?category=5245251'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <b>WhatsApp:</b> (iPhone) How to create and invite people to a
                  group
                </a>
              </li>
              <li>
                <a
                  href='https://help.nextdoor.com/s/article/How-to-create-a-group?language=en_AU'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <b>NextDoor:</b> How to use NextDoor
                </a>
              </li>
            </ul>
            <p>
              If you choose to use Facebook, add a clear group description to
              the ‘About’ section of your page to help people decide if it’s the
              group for them!
            </p>
            <p>
              Make the group ‘private’ <strong>not</strong> ‘secret’ or
              ‘public’. That way you can make sure only members of your
              community join.
            </p>

            <h3 className={s.heading3} id='sharing-the-load'>
              Sharing the Load
            </h3>
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

            <h3 className={s.heading3} id='rules'>
              Rules and Guidelines
            </h3>
            <p>
              You may want to set rules and guidelines for your group to follow.
              This can help you to define your purpose and create a safe and
              caring community. Here are some useful rules you could use: (with
              thanks to the Northern Beaches - Coronavirus Community Support
              Group).
            </p>
            <ol className={s.rulesGuidelines}>
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
          <div>
            <p style={{ marginTop: '32px' }}>
              <b>Content</b>
            </p>
            <ul className={s.sideNav}>
              <li>
                <Link smooth href='/resources#postcards'>
                  <a>
                    <span className={s.sideNavHeader}>
                      Community Care Postcards
                    </span>
                  </a>
                </Link>
                <ul className={s.subSideNav}>
                  <li>
                    <Link href='/resources#how-to-use-postcards'>
                      <a>How to use the postcards</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/resources#tips'>
                      <a>Tips</a>
                    </Link>
                  </li>
                  <li>
                    {/* eslint-disable react/jsx-no-target-blank */}
                    <a
                      href='https://www.getup.org.au/postcards'
                      target='_blank'
                    >
                      {/* eslint-enable react/jsx-no-target-blank */}
                      Download Postcards
                    </a>
                  </li>
                  <li>
                    <Link href='/create'>
                      <a>Make your Postcard</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href='/resources#start-a-group'>
                  <span className={s.sideNavHeader}>
                    <a>Setting up a community care group</a>
                  </span>
                </Link>
                <ul className={s.subSideNav}>
                  <li>
                    <Link href='/resources#organise'>
                      <a>Where will you organise and communicate?</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/resources#sharing-the-load'>
                      <a>Sharing the Load</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/resources#rules'>
                      <a>Rules and Guidelines</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </ContentWithSidebar>
      </div>
    </>
  )
}
