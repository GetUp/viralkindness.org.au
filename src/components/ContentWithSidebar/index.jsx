import React from 'react'
import s from './index.module.scss'

export default ({ reverse, children, ...props }) => (
  <div className={`${s.gridContainer} ${reverse && s.reverse}`} {...props}>
    {children}
  </div>
)
