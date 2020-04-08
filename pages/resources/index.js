import React, { useEffect } from 'react'
import Router, { useRouter } from 'next/router'

export default () => {
  const { asPath } = useRouter()

  if (/start-a-group|organise|sharing-the-load|rules/.test(asPath)) {
    Router.replace('/starting-a-group')
  } else {
    Router.replace('/postcards')
  }

  return null
}
