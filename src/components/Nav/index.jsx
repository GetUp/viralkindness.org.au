import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import s from './index.module.scss'
import { VKLogo } from '../Icons'

export default () => (
  <nav className={s.navContainer}>
    <Link to='/' className={s.logoWrapper}>
      <VKLogo />
    </Link>
  </nav>
)
