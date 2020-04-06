import React from 'react'
import Link from 'next/link'

export default ({ s }) => (
  <Link href='/resources' className={s.sidebarLink}>
    <>
      <h4 className={s.sidebarLinkHeader}>
        <span>Resources</span>
      </h4>
      <div className={s.sidebarLinkSubtitle}>
        Need Postcards? Interested in starting a group? This is for you!
      </div>
    </>
  </Link>
)
