import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default ({ s }) => (
  <Link to='/resources' className={s.sidebarLink}>
    <h4 className={s.sidebarLinkHeader}>
      <span>Resources</span>
    </h4>
    <div className={s.sidebarLinkSubtitle}>
      Need Postcards? Interested in starting a group? This is for you!
    </div>
  </Link>
)
