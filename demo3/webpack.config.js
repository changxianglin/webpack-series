const { merge } = require('webpack-merge')
//
const base = require('./webpack.config.base.js')
const dev = require('./webpack.config.dev.js')
const prod = require('./webpack.config.prod.js')


module.exports = (env, argv) => {
    let config = argv.mode === 'development' ? dev : prod
    return merge(base, config)
};
