import React from 'react'
import s from './index.module.scss'

export default ({ children }) => (
  <div className={s.headerContainer}>
    <div className={s.contentWrapper}>{children}</div>
  </div>
)
