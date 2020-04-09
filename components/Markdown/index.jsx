import React from 'react'
import Markdown from 'markdown-to-jsx'
import Link from 'next/link'

const NextLink = ({ children, ...props }) => (
  <Link {...props}>
    <a>{children}</a>
  </Link>
)

export default ({ children }) => {
  return (
    <Markdown
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
