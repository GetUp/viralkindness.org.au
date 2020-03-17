import React from 'react'
import s from './index.module.scss'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    <div className={s.headerContainer}>
      <div className={s.header}>
        <h1>Viral Kindness heading</h1>
        <p>Subheading paragraph</p>
        <div className={s.links}>
          <div className={s.link}>
            <Link to='/register'>
              Register
              <br />
              <span>Register your local group</span>
            </Link>
          </div>
          <div>
            <Link to='/join'>Find a group</Link>
          </div>
          <div>
            <Link to='/faq'>How to</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)
