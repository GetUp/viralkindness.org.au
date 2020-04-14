import React from 'react'
import Link from 'next/link'
import s from './index.module.scss'

export default ({ className, style, data, route, header }) => {
  return (
    <div
      className={`${s.howToModule} ${className ? className : ''}`}
      style={style}
    >
      <p className={s.contentHeader}>
        <b>{header}</b>
      </p>
      <ul className={s.sticky}>
        {data.map(i => (
          <li key={i.title}>
            <Link href={`/${route}#${i.hash}`}>
              <a>
                <span>{i.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
