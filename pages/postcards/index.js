import React, { useState } from 'react'
import Markdown from '../../components/Markdown'
import s from './index.module.scss'
import Link from 'next/link'
import PageHeader from '../../components/PageHeader'
import ContentWithSidebar from '../../components/ContentWithSidebar'
import thumbnail from '../../assets/images/viralkindness-1.jpg'
import main from '../../assets/images/viralkindness-4.jpg'
import { Download, Add } from '../../components/Icons'
import { attributes, react as Content } from '../../content/postcards.md'
import Create from '../../components/Create'

export default () => {
  const [isCustomizeActive, setCustomizeActive] = useState(false)

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
          </div>
        </ContentWithSidebar>
        <HowToPostcard
          data={attributes.howtopostcard}
          setCustomizeActive={setCustomizeActive}
        />
        <Create />
      </div>
    </>
  )
}

const HowToPostcard = ({ data, setCustomizeActive }) => (
  <ContentWithSidebar reverse style={{ marginTop: 0 }}>
    <div>
      <h1>{data.title}</h1>
      <Markdown>{data.text}</Markdown>
      <p>
        Add your details into the form below to customise your postcard before
        printing.{' '}
        <a href='https://www.getup.org.au/postcards' target='_blank'>
          Alternatively, you can click here if you’d rather print the template
          and add these details by hand.{' '}
        </a>
      </p>
      <div className={s.downloadBtnContainers}>
        {/* eslint-disable react/jsx-no-target-blank */}
        <a
          href='https://www.getup.org.au/postcards'
          className={s.downloadPostcard}
          target='_blank'
        >
          {/* eslint-enable react/jsx-no-target-blank */}
          <Download />
          Download Postcard Template
        </a>
      </div>
    </div>
  </ContentWithSidebar>
)

const Tabs = ({ isCustomizeActive, setCustomizeActive }) => (
  <div className={s.tabs}>
    <div
      className={`${s.tab} ${!isCustomizeActive && s.active}`}
      onClick={() => setCustomizeActive(false)}
    >
      How to postcard
    </div>
    <div
      className={`${s.tab} ${isCustomizeActive && s.active}`}
      onClick={() => setCustomizeActive(true)}
    >
      Customise your postcard
    </div>
  </div>
)
