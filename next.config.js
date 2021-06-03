// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['pbs.twimg.com']
  }
})

/*
module.exports = {
  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json'
          }
        ]
      }
    ]
  }
}
*/

module.exports = {
  experimental: {
    headers() {
      return [
        {
          source: '/.well-known/apple-app-site-association',
          headers: [{ key: 'content-type', value: 'application/json' }]
        },
        {
          source: '/.well-known/assetlinks',
          headers: [{ key: 'content-type', value: 'application/json' }]
        }
      ]
    }
  }
}
