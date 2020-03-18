import React from 'react'
import s from './index.module.scss'

export default ({ reverse, className, children, ...props }) => (
  <div
    className={`${s.gridContainer} ${className} ${reverse && s.reverse}`}
    {...props}
  >
    {children}
  </div>
)
