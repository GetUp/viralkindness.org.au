import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { RightArrow } from './Icons'

export default ({ s }) => (
  <Link to='/resources' className={s.sidebarLink}>
    <div className={s.sidebarLinkHeader}>
      <RightArrow />
      Resources
    </div>
    <div className={s.sidebarLinkSubtitle}>
      Keep up to date - with accurate information
    </div>
  </Link>
)
