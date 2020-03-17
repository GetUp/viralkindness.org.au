import React from 'react'
import s from './index.module.scss'

export default ({ children }) => (
  <div className={s.gridContainer}>{children}</div>
)
