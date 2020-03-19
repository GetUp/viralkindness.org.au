import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import s from './index.module.scss'

export default () => (
  <footer>
    <div className={s.content}>
      <ul className={s.linkContainer}>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
      <div style={{ opacity: '0.5' }}>
        <p id='disclaimer'>
          * Information supplied on this website is crowd sourced. Whilst we
          attempt to ensure all groups are genuinely engaged to help spread
          #ViralKindness, we would like you to be safe so please take reasonable
          steps like: not sharing personal information you don’t feel
          comfortable sharing, not putting yourself in financial difficulty and
          keeping yourself physically safe. If you have any concerns, please
          send them to{' '}
          <a href='mailto:viralkindness@getup.org.au'>
            viralkindness@getup.org.au
          </a>
          .
        </p>

        <p>
          Our team acknowledges that we meet and work on the land of the Gadigal
          people of the Eora Nation. We wish to pay respect to their Elders —
          past, present and future — and acknowledge the important role all
          Aboriginal and Torres Strait Islander people continue to play within
          Australia and the GetUp community.
        </p>

        <p>
          WARNING: Aboriginal and Torres Strait Islander people are warned that
          this website may contain images or names of deceased persons.
        </p>

        <p>
          © {new Date().getFullYear()} GetUp! All rights reserved. Authorised by
          Paul Oosting, GetUp Limited, Level 14, 338 Pitt Street, Sydney NSW
          2000.
        </p>
      </div>
    </div>
  </footer>
)
