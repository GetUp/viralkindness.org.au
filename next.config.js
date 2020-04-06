require('dotenv').config()
const withImages = require('next-images')

module.exports = withImages({
  env: {
    REACT_APP_GOOGLE_MAPS_API_KEY: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    REACT_APP_GOOGLE_ANALYTICS: process.env.REACT_APP_GOOGLE_ANALYTICS,
    REACT_APP_API_HOST: process.env.REACT_APP_API_HOST,
    REACT_APP_PUBLIC_DATABASE: process.env.REACT_APP_PUBLIC_DATABASE,
    REACT_APP_PRIVATE_DATABASE: process.env.REACT_APP_PRIVATE_DATABASE,
    REACT_APP_RADIUS_IN_METERS: process.env.REACT_APP_RADIUS_IN_METERS,
    REACT_APP_FORUM_NAME: process.env.REACT_APP_FORUM_NAME
  },
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] }
    })
    return cfg
  }
})
