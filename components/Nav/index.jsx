import React from 'react'
import Link from 'next/link'
import s from './index.module.scss'
import { VKLogo, ChevronDown } from '../Icons'
import GetUp from '../../assets/images/getup-logo.svg'

const nav = [
  {
    title: 'Groups',
    href: '#',
    items: [
      {
        title: 'Add group',
        href: '/register',
      },
      {
        title: 'Join group',
        href: '/#groupSearch',
      },
      {
        title: 'Start group',
        href: '/starting-a-group',
      },
    ],
  },
  {
    title: 'Starting a group',
    href: '/starting-a-group',
  },
  {
    title: 'Ways to help',
    href: '/ways-to-help',
  },
  {
    title: 'Postcards',
    href: '/postcards',
  },
  {
    title: 'Laws and Safety',
    href: '/lawsandsafety',
  },
]

export default () => {
  const [open, setOpen] = React.useState(false)

  return (
    <nav className={s.navContainer}>
      <div className={s.leftContainer}>
        <Link href='/'>
          <a className={s.logoWrapper}>
            <VKLogo />
          </a>
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
          {nav.map((i, index) => (
            <li
              className={s.navItem}
              key={index}
              onClick={() => setOpen(false)}
            >
              <Link href={i.href}>
                <a className={s.navItemLink}>
                  {i.title}
                  {i.items && <ChevronDown />}
                </a>
              </Link>
              {i.items && (
                <ul className={s.subNavItems}>
                  {i.items.map((sub, subIndex) => (
                    <li
                      className={s.subNavItem}
                      key={subIndex}
                      onClick={() => setOpen(false)}
                    >
                      <Link href={sub.href}>
                        <a className={s.subNavItemLink}>{sub.title}</a>
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
