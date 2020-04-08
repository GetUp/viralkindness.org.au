import React, { useState, useEffect } from 'react'
import s from './index.module.scss'
import ReactGA from 'react-ga'
import Link from 'next/link'
import PageHeader from '../../components/PageHeader'
import ContentWithSidebar from '../../components/ContentWithSidebar'
import thumbnail from '../../assets/images/viralkindness-1.jpg'
import main from '../../assets/images/viralkindness-4.jpg'
import { Download, Add } from '../../components/Icons'
import { attributes, react as Content } from '../../content/postcards.md'
import Create from '../../components/Create'

export default () => {
  useEffect(
    () => ReactGA.pageview(window.location.pathname + window.location.search),
    []
  )
  const [isCustomizeActive, setCustomizeActive] = useState(true)

  return (
    <>
      <div>
        <PageHeader>
          <h1 className={s.pageHeader}>{attributes.title}</h1>
          <div
            className={s.subtitle}
            dangerouslySetInnerHTML={{ __html: attributes.subtitle }}
          />
        </PageHeader>
        <ContentWithSidebar reverse>
          <div style={{ maxWidth: '700px' }}>
            <Content />
            <Tabs {...{ isCustomizeActive, setCustomizeActive }} />
          </div>
        </ContentWithSidebar>
        {isCustomizeActive ? (
          <Create />
        ) : (
          <HowToPostcard
            data={attributes.howtopostcard}
            setCustomizeActive={setCustomizeActive}
          />
        )}
      </div>
    </>
  )
}

const HowToPostcard = ({ data, setCustomizeActive }) => (
  <ContentWithSidebar reverse style={{ marginTop: 0 }}>
    <div>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
      <div className={s.downloadBtnContainers}>
        <div
          className={s.downloadPostcard}
          onClick={() => setCustomizeActive(true)}
        >
          <Add />
          Make your Postcard
        </div>

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
    </div>
  </ContentWithSidebar>
)

const Tabs = ({ isCustomizeActive, setCustomizeActive }) => (
  <div className={s.tabs}>
    <div
      className={`${s.tab} ${isCustomizeActive && s.active}`}
      onClick={() => setCustomizeActive(true)}
    >
      Customize your postcard
    </div>
    <div
      className={`${s.tab} ${!isCustomizeActive && s.active}`}
      onClick={() => setCustomizeActive(false)}
    >
      How to postcard
    </div>
  </div>
)
