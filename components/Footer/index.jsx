import React from 'react'
import Link from 'next/link'
import s from './index.module.scss'

export default () => (
  <footer className={s.footer}>
    <div className={s.content}>
      <ul className={s.linkContainer}>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact Us</a>
          </Link>
        </li>
        <li>
          {/* eslint-disable react/jsx-no-target-blank */}
          <a
            href='https://www.getup.org.au/about/privacy-policy'
            target='_blank'
            rel='noopener'
          >
            {/* eslint-enable react/jsx-no-target-blank */}
            Privacy Policy
          </a>
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
