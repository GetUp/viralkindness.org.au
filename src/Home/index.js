import React from 'react'
import s from './index.module.scss'
import { HashLink as Link } from 'react-router-hash-link'
import { Add, Create, Find } from '../components/Icons'
import ContentWithSidebar from '../components/ContentWithSidebar'
import GroupSearch from '../components/GroupSearch'
import illustration from '../assets/images/vk-illustration.svg'
import Footer from '../components/Footer'
import ResourcesLink from '../components/ResourcesLink'
import wave from '../assets/images/wave.svg'

const scrollFocus = el => {
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  el.focus({ preventScroll: true })
}

export default () => {
  return (
    <>
      <div className={s.headerContainer}>
        <div className={s.header}>
          <h1>#ViralKindness</h1>
          <h2>We’re all in this together</h2>
          <p>
            #ViralKindness is a hub for the community care groups springing up
            across the country to support people in need or in self-isolation
            during the coronavirus crisis. Whether it’s shopping for food,
            picking up medicine or a regular check in call – there are lots of
            ways we can stay together, even when we’re apart!
          </p>
          <div className={s.links}>
            <Link to='/register' className={s.link}>
              <Add />
              <div>
                <div className={s.linkText}>
                  <span>Add a group</span>
                </div>
              </div>
            </Link>
            <Link to='#groupSearch' scroll={scrollFocus} className={s.link}>
              <Find />
              <div>
                <div className={s.linkText}>
                  <span>Find a group</span>
                </div>
              </div>
            </Link>
            <Link to='/resources#start-a-group' className={s.link}>
              <Create />
              <div>
                <div className={s.linkText}>
                  <span>Create a group</span>
                </div>
              </div>
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
            <Link to='/register' className={s.sidebarLink}>
              <h4 className={s.sidebarLinkHeader}>
                <span>Add</span>
              </h4>
              <div className={s.sidebarLinkSubtitle}>
                Adding a community care group in your local area is easy!
              </div>
            </Link>
            <ResourcesLink s={s} />
            <Link to='/faq' className={s.sidebarLink}>
              <h4 className={s.sidebarLinkHeader}>
                <span>FAQs</span>
              </h4>
              <div className={s.sidebarLinkSubtitle}>
                We will continue to update this page as more groups offer advice
                on what has worked well for them.
              </div>
            </Link>
            <Link to='/forum' className={s.sidebarLink}>
              <h4 className={s.sidebarLinkHeader}>
                <span>Forum</span>
              </h4>
              <div className={s.sidebarLinkSubtitle}>
                Connect with other groups to share resources & tactics.
              </div>
            </Link>
          </div>
        </ContentWithSidebar>
      </div>

      <Footer />
    </>
  )
}
