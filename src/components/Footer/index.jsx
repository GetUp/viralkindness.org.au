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
      </ul>
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
        © 2020 GetUp! All rights reserved. Authorised by Paul Oosting, GetUp
        Limited, Level 14, 338 Pitt Street, Sydney NSW 2000.
      </p>
    </div>
  </footer>
)
