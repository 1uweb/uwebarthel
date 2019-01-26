const withSize = require('next-size')
const withSass = require('@zeit/next-sass')

module.exports = withSass(), withSize()