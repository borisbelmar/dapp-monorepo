// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(['ui'])

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["gateway.ipfscdn.io"],
  }
})
