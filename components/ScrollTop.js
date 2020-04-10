import React from 'react'
import { withRouter } from 'react-router'

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      document.body.scrollIntoView({ behavior: 'smooth' })
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
