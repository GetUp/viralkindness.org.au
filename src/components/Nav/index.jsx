import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import s from './index.module.scss'
import { VKLogo } from '../Icons'
import GetUp from '../../assets/images/getup-logo.svg'

export default () => (
  <nav className={s.navContainer}>
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
  </nav>
)
