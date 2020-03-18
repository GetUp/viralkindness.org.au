import React from 'react'
import s from './index.module.scss'
import { HashLink as Link } from 'react-router-hash-link'
import { RightArrow, Search } from '../components/Icons'
import ContentWithSidebar from '../components/ContentWithSidebar'
import GroupSearch from '../components/GroupSearch'
import FaqNav from '../components/FaqNav'
import faq from '../data/faq'
import illustration from '../assets/images/vk-illustration.svg'
import Footer from '../components/Footer'
import ResourcesLink from '../components/ResourcesLink'

const scrollFocus = el => {
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  el.focus({ preventScroll: true })
}

export default () => (
  <>
    <div className={s.headerContainer}>
      <div className={s.header}>
        <h1>#ViralKindness</h1>
        <h2>We can do this together</h2>
        <p>
          #ViralKindness is a hub for the community care groups springing up
          across the country offering to help others through coronavirus
          (COVID-19). Whether it’s shopping for food, picking up medicine or a
          regular check in call – there are lots of ways we can all work
          together, even when we’re apart!
        </p>
        <div className={s.links}>
          <Link to='/register' className={s.link}>
            <RightArrow />
            <div>
              <div className={s.linkText}>Add a group</div>
              <div className={s.linkSubtext}>Add your local group</div>
            </div>
          </Link>
          <Link to='#groupSearch' scroll={scrollFocus} className={s.link}>
            <Search color='white' />
            <div>
              <div className={s.linkText}>Find a group</div>
              <div className={s.linkSubtext}>Search by your location</div>
            </div>
          </Link>
          <Link to='/faq' className={s.link}>
            <RightArrow />
            <div>
              <div className={s.linkText}>{faq.title}</div>
              <div className={s.linkSubtext}>{faq.subtitle}</div>
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
    <ContentWithSidebar>
      <GroupSearch />
      <div>
        <div className={s.sidebarContainer}>
          <Link to='/register' className={s.sidebarLink}>
            <div className={s.sidebarLinkHeader}>
              <Search />
              Add
            </div>
            <div className={s.sidebarLinkSubtitle}>
              Adding a community care group in your local area is easy!
            </div>
          </Link>
          <ResourcesLink s={s} />
        </div>
        <FaqNav />
      </div>
    </ContentWithSidebar>
    <Footer />
  </>
)
