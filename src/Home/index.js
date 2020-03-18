import React from 'react'
import s from './index.module.scss'
import { Link } from 'react-router-dom'
import { RightArrow, Search } from '../components/Icons'
import ContentWithSidebar from '../components/ContentWithSidebar'
import { howto } from '../data/howto'
import illustration from '../assets/images/vk-illustration.svg'

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
          <Link to='/join' className={s.link}>
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
              <div className={s.linkText}>{howto.title}</div>
              <div className={s.linkSubtext}>{howto.subtitle}</div>
            </div>
          </Link>
        </div>
      </div>
      <div className={s.illustrationWrapper}>
        <img src={illustration} />
      </div>
      <div className={s.backgroundOverlap} />
    </div>
    <ContentWithSidebar>
      <div className={s.mainContent}>
        <h2>Find a group</h2>
        <label>
          <div className={s.inputContainer}>
            <Search />
            <input type='text' placeholder='Postcode or suburb' />
          </div>
        </label>
        <div className={s.searchStatus}>Type your postcode or suburb </div>
      </div>
      <div>
        <div>
          <h3>Add</h3>
        </div>
        <div className={s.howToModule}>
          <h3>{howto.title}</h3>
          <ul>
            {howto.data.map(i => (
              <li key={i.title}>{i.title}</li>
            ))}
          </ul>
          <a href='#'>More</a>
        </div>
      </div>
    </ContentWithSidebar>
  </div>
)
