import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import s from './index.module.scss'
import { VKLogo, ChevronDown } from '../Icons'
import GetUp from '../../assets/images/getup-logo.svg'
import { NavLink } from 'react-router-dom'

const nav = [
  {
    title: 'Groups',
    href: 'getup.org.au',
    items: [
      {
        title: 'Add a group',
        href: '/register'
      },
      {
        title: 'Find a group',
        href: '/#groupSearch'
      },
      {
        title: 'Create a group',
        href: '/resources#start-a-group'
      }
    ]
  },
  {
    title: 'Postcards',
    href: '/resources#how-to-use-postcards',
    items: [
      {
        title: 'Make your own postcard',
        href: '/create'
      },
      {
        title: 'Download a PDF',
        href: '/resources#how-to-use-postcards'
      }
    ]
  },
  {
    title: 'Resources',
    href: '/resources'
  },
  {
    title: 'Forum',
    href: '/forum'
  }
]

export default () => {
  const [open, setOpen] = React.useState(false)

  return (
    <nav className={s.navContainer}>
      <div className={s.leftContainer}>
        <Link to='/' className={s.logoWrapper}>
          <VKLogo />
        </Link>
        <a
          href='https://getup.org.au'
          target='_blank'
          rel='noopener noreferrer'
          style={{ textDecoration: 'none' }}
        >
          <div className={s.poweredBy}>
            <div className={s.poweredByText}>Powered By</div>
            <img src={GetUp} alt='GetUp logo' />
          </div>
        </a>
      </div>

      <div className={s.rightContainer}>
        <div
          className={`${s.menu} ${open && s.open}`}
          onClick={() => setOpen(!open)}
        >
          <div />
          <div />
          <div />
        </div>
        <ul className={`${s.navItems} ${open ? '' : s.hide}`}>
          {nav.map(i => (
            <li className={s.navItem}>
              <NavLink
                exact
                to={i.href}
                className={s.navItemLink}
                activeClassName={!i.items && s.active}
              >
                {i.title}
                {i.items && <ChevronDown />}
              </NavLink>
              {i.items && (
                <ul className={s.subNavItems}>
                  {i.items.map(sub => (
                    <li className={s.subNavItem}>
                      <Link to={sub.href} className={s.subNavItemLink}>
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
