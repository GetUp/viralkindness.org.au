import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { attributes as faq } from '../../content/ways-to-help.md'
import s from './index.module.scss'

export default ({ className, style }) => {
  const notFaqPage = () => useRouter().pathname !== '/ways-to-help'

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
          <Link href='/ways-to-help'>
            <a style={{ borderBottom: '0px' }}>{faq.title}</a>
          </Link>
        </h4>
      )}
      <ul className={!notFaqPage() ? s.sticky : ''}>
        {faq.questions.map(i => (
          <li key={i.title}>
            <Link href={`/ways-to-help#${i.hash}`}>
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
