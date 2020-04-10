import React from 'react'
import s from './index.module.scss'
import { ChevronDown } from '../Icons'

export const Accordion = ({ children, className = '', ...props }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className={`${className} ${s.container} ${open && s.open}`} {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { open, setOpen })
      )}
    </div>
  )
}

export const AccordionTitle = ({
  children,
  className = '',
  open,
  setOpen,
  ...props
}) => (
  <div
    role='button'
    className={`${className} ${s.title}`}
    onClick={() => setOpen(!open)}
    {...props}
  >
    <ChevronDown className={s.chevron} />
    {children}
  </div>
)

export const AccordionBody = ({
  children,
  className = '',
  open,
  setOpen,
  ...props
}) => {
  return (
    <>
      {open && (
        <div className={`${className} ${s.body}`} {...props}>
          {children}
        </div>
      )}
    </>
  )
}
