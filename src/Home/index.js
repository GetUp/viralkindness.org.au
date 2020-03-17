import React from 'react'
import s from './index.module.scss'
import { Link } from 'react-router-dom'
import { RightArrow } from '../components/Icons'
import ContentWithSidebar from '../components/ContentWithSidebar'

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
          <Link to="/register" className={s.link}>
            <RightArrow />
            <div>
              <div className={s.linkText}>Add</div>
              <div className={s.linkSubtext}>Add your local group</div>
            </div>
          </Link>
          <Link to="/join" className={s.link}>
            <RightArrow />
            <div>
              <div className={s.linkText}>Find a group</div>
              <div className={s.linkSubtext}>
                Search a group by your location
              </div>
            </div>
          </Link>
          <Link to="/faq" className={s.link}>
            <RightArrow />
            <div>
              <div className={s.linkText}>How to</div>
              <div className={s.linkSubtext}>
                How can you spread #ViralKindness
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
    <ContentWithSidebar>
      <div>
        <h2>Find a group</h2>
      </div>
      <div>
        <div>
          <h3>Add</h3>
        </div>
        <div>
          <h3>How to</h3>
        </div>
      </div>
    </ContentWithSidebar>
  </div>
)
