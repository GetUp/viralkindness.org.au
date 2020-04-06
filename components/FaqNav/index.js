import React from 'react'
// import { HashLink as Link } from 'react-router-hash-link'
import Link from 'next/link'
import faq from '../../data/faq'
import s from './index.module.scss'

export default ({ className, style }) => {
  const notFaqPage = () => window.location.pathname !== '/faq'

  return (
    <div
      className={`${s.howToModule} ${className ? className : ''}`}
      style={style}
    >
      {!notFaqPage() && (
        <p className={s.contentHeader}>
          <b>Content</b>
        </p>
      )}
      {notFaqPage() && (
        <h4>
          <Link href='/faq' style={{ borderBottom: '0px' }}>
            {faq.title}
          </Link>
        </h4>
      )}
      <ul className={!notFaqPage() ? s.sticky : ''}>
        {faq.data.map(i => (
          <li key={i.title}>
            <Link smooth to={`/faq#${i.hash}`}>
              <span>{i.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
