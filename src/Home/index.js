import React from 'react'
import s from './index.module.scss'
import { HashLink as Link } from 'react-router-hash-link'
import { RightArrow, Search } from '../components/Icons'
import ContentWithSidebar from '../components/ContentWithSidebar'
import GroupSearch from '../components/GroupSearch'
import FaqNav from '../components/FaqNav'
import faq from '../data/faq'
import illustration from '../assets/images/vk-illustration.svg'

const scrollFocus = el => {
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  setTimeout(() => el.focus(), 300)
}

export default () => (
  <div>
    <div className={s.headerContainer}>
      <div className={s.header}>
        <h1>Viral Kindness heading</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
          explicabo id quis fugit architecto eius assumenda dolores odio laborum
          voluptates quisquam illo, provident ex quam sequi dicta laboriosam.
          Tenetur, voluptate!
        </p>
        <div className={s.links}>
          <Link to='/register' className={s.link}>
            <RightArrow />
            <div>
              <div className={s.linkText}>Add</div>
              <div className={s.linkSubtext}>Add your local group</div>
            </div>
          </Link>
          <Link to='#groupSearch' scroll={scrollFocus} className={s.link}>
            <Search color='white' />
            <div>
              <div className={s.linkText}>Find a group</div>
              <div className={s.linkSubtext}>
                Search a group by your location
              </div>
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
      <div className={s.backgroundOverlap} />
    </div>
    <ContentWithSidebar>
      <GroupSearch />
      <div>
        <div>
          <h3>
            <Link to='/register'>Add</Link>
          </h3>
        </div>
        <FaqNav />
      </div>
    </ContentWithSidebar>
  </div>
)
