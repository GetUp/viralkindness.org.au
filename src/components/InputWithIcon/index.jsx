import React from 'react'
import s from './index.module.scss'

export default ({ className, children, ...props }) => (
  <div
    className={`${s.inputContainer} ${className ? className : ''}`}
    {...props}
  >
    {children}
  </div>
)
