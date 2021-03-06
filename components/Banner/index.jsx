import React from 'react'
import s from './index.module.scss'
import Link from 'next/link'
import { Add, ChevronDown } from '../Icons'

export default ({ className = '', children, ...props }) => {
  const suppressBanner =
    window.location.pathname === '/laws-and-safety' ||
    (localStorage && localStorage.getItem('bannerSeen'))
  const [show, setShow] = React.useState(!suppressBanner)
  const hideBanner = () => {
    setShow(false)
    localStorage && localStorage.setItem('bannerSeen', true)
  }
  return (
    <>
      {show && (
        <div className={`${s.bannerContainer} ${className}`} {...props}>
          <div className={`${s.content}`}>
            <div className={s.closeButton}>
              <span onClick={hideBanner}>
                <Add />
              </span>
            </div>
            We can still meet the essential needs of isolated or vulnerable
            people in our community whilst following the health guidelines and
            physical distancing rules. Before you begin, check the latest rules
            in your state.
            <br />
            <Link href='/laws-and-safety'>
              <a className={s.button} onClick={hideBanner}>
                Check the rules <ChevronDown />
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
