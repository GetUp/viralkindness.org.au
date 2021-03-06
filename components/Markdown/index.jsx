import React from 'react'
import Markdown from 'markdown-to-jsx'
import Link from 'next/link'

const NextLink = ({ children, className = '', href, ...props }) => {
  const mailto = /mailto|http/
  const http = /http/

  return (
    <>
      {mailto.test(href) ? (
        <a href={href} target={http.test(href) ? '_blank' : '_self'} {...props}>
          {children}
        </a>
      ) : (
        <Link href={href}>
          <a className={className} {...props}>
            {children}
          </a>
        </Link>
      )}
    </>
  )
}

export default ({ children, ...props }) => {
  return (
    <Markdown
      {...props}
      options={{
        overrides: {
          a: {
            component: NextLink
          }
        }
      }}
    >
      {children}
    </Markdown>
  )
}
