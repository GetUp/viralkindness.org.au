import React from 'react'
import s from './index.module.scss'
import { Add, ChevronDown } from '../Icons'
import { Link } from 'react-router-dom'

export default ({ className = '', children, ...props }) => {
  const [show, setShow] = React.useState(true)

  return (
    <>
      {show && (
        <div className={`${s.bannerContainer} ${className}`} {...props}>
          <div className={`${s.content}`}>
            <div onClick={() => setShow(false)} className={s.closeButton}>
              <Add />
            </div>
            We can still meet the essential needs of isolated or vulnerable
            people in our community whilst following the health guidelines and
            physical distancing rules. Before you begin, check the latest rules
            in your state.
            <br />
            <Link
              to='/lawsandsafety'
              className={s.button}
              onClick={() => setShow(false)}
            >
              Check the rules <ChevronDown />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
