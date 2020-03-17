import React from 'react'
import s from './index.module.scss'

export default ({ href, children, ...props }) => (
  <div className={s.messageContainer}>
    <p {...props} className={s.message}>
      <a href={href} className={s.link} target="_blank" rel="noopener">
        {children}
      </a>
    </p>
  </div>
)
