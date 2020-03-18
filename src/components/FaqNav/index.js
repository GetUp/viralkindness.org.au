import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import faq from '../../data/faq'
import s from './index.module.scss'

export default ({ className, style }) => {
  const faqPage = () => window.location.pathname !== '/faq'

  return (
    <div
      className={`${s.howToModule} ${className ? className : ''}`}
      style={style}
    >
      {faqPage() && (
        <h3>
          <Link to='/faq'>{faq.title}</Link>
        </h3>
      )}
      <ul className={!faqPage() ? s.sticky : ''}>
        {faq.data.map(i => (
          <li key={i.title}>
            <Link smooth to={`/faq#${i.hash}`}>
              {i.title}
            </Link>
          </li>
        ))}
      </ul>
      {faqPage() && (
        <Link to='/faq' className={s.moreButton}>
          MORE
        </Link>
      )}
    </div>
  )
}
