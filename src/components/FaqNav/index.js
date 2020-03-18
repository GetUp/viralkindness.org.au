import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import faq from '../../data/faq'
import s from './index.module.scss'

export default ({ style }) => {
  const homePage = () => window.location.pathname === '/'

  return (
    <div className={s.howToModule} style={style}>
      {homePage() && (
        <h3>
          <Link to='/faq'>{faq.title}</Link>
        </h3>
      )}
      <ul>
        {faq.data.map(i => (
          <li key={i.title}>
            <Link smooth to={`/faq#${i.hash}`}>
              {i.title}
            </Link>
          </li>
        ))}
      </ul>
      {homePage() && (
        <Link to='/faq' className={s.moreButton}>
          MORE
        </Link>
      )}
    </div>
  )
}
