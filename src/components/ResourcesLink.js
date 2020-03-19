import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { RightArrow } from './Icons'

export default ({ s }) => (
  <Link to='/resources' className={s.sidebarLink}>
    <h4 className={s.sidebarLinkHeader}>Resources</h4>
    <div className={s.sidebarLinkSubtitle}>
      Keep up to date - with accurate information
    </div>
  </Link>
)
