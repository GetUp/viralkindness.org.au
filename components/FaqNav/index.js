import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import faq from '../../data/faq'
import s from './index.module.scss'

export default ({ className, style }) => {
  const notFaqPage = () => useRouter().pathname !== '/faq'

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
          <Link href='/faq'>
            <a style={{ borderBottom: '0px' }}>{faq.title}</a>
          </Link>
        </h4>
      )}
      <ul className={!notFaqPage() ? s.sticky : ''}>
        {faq.data.map(i => (
          <li key={i.title}>
            <Link href={`/faq#${i.hash}`}>
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
