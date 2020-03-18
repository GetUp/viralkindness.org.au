import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.scss'
import { VKLogo } from '../Icons'

export default () => (
  <nav className={s.navContainer}>
    <Link to='/' className={s.logoWrapper}>
      <VKLogo />
    </Link>
  </nav>
)
