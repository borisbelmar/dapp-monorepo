const withTM = require('next-transpile-modules')(['ui'])

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["gateway.ipfscdn.io"],
  }
})
