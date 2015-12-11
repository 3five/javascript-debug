var webpack = require('webpack')

var baseConfig = {
    context: __dirname + "/src",
    entry: "./debug",
    output: {
        path: __dirname + "/dist",
        filename: "debug.js",
        library: 'debug',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
}

var prodConfig = clone(baseConfig)
prodConfig.output.filename = 'debug.min.js'
prodConfig.plugins = [
  new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
  })
]

module.exports = [baseConfig, prodConfig]

function clone(obj) {
  return JSON.parse(JSON.stringify(obj))
}