import React from 'react'
import s from './index.module.scss'
import Link from 'next/link'
import { Add, Create, Find } from '../../components/Icons'
import ContentWithSidebar from '../../components/ContentWithSidebar'
import GroupSearch from '../../components/GroupSearch'
import illustration from '../../assets/images/vk-illustration.svg'
import wave from '../../assets/images/wave.svg'

const scrollFocus = el => {
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  el.focus({ preventScroll: true })
}

export default () => {
  return (
    <>
      <div className={s.headerContainer}>
        <div className={s.header}>
          <h1>#Viral Kindness</h1>
          <h2>We’re all in this together</h2>
          <p>
            #ViralKindness is a hub for the community care groups springing up
            across the country to support people in need or in self-isolation
            during the coronavirus crisis. Whether it’s shopping for food,
            picking up medicine or a regular check in call – there are lots of
            ways we can stay together, even when we’re apart!
          </p>
          <div className={s.links}>
            <Link href='/register'>
              <a className={s.link}>
                <Add />
                <div>
                  <div className={s.linkText}>
                    <span>Add group</span>
                  </div>
                </div>
              </a>
            </Link>
            {/* <Link href='#groupSearch' scroll={scrollFocus}> */}
            <Link href='#groupSearch'>
              <a className={s.link}>
                <Find />
                <div>
                  <div className={s.linkText}>
                    <span>Join group</span>
                  </div>
                </div>
              </a>
            </Link>
            <Link href='/starting-a-group'>
              <a className={s.link}>
                <Create />
                <div>
                  <div className={s.linkText}>
                    <span>Start group</span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className={s.illustrationWrapper}>
          <img
            src={illustration}
            alt='Raised hands holding objects, offering help'
          />
        </div>
      </div>
      <div className={s.waveContainer}>
        <img src={wave} alt='' />
      </div>
      <div className={s.contentWithSidebar}>
        <ContentWithSidebar>
          <GroupSearch className={s.groupSearch} />
          <div className={s.sidebarContainer}>
            <Link href='/postcards'>
              <a className={s.sidebarLink}>
                <h4 className={s.sidebarLinkHeader}>
                  <span>Postcards</span>
                </h4>
                <div className={s.sidebarLinkSubtitle}>
                  Sending your neighbours a postcard connects with people most
                  at risk. Customise your postcard or download one!
                </div>
              </a>
            </Link>
            <Link href='/ways-to-help'>
              <a className={s.sidebarLink}>
                <h4 className={s.sidebarLinkHeader}>
                  <span>Ways to Help</span>
                </h4>
                <div className={s.sidebarLinkSubtitle}>
                  This page will be updated regularly with ideas and advice for
                  the many ways we can help our neighbours.
                </div>
              </a>
            </Link>
          </div>
        </ContentWithSidebar>
      </div>
    </>
  )
}
