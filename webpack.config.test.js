const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'async-node',
  externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs2'
  },
  module: {
    exprContextCritical: false,
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: [ /\.js.?$/ ],
        include: [/src/],
        loader: 'babel',
        exclude: [/\.test.js$/]
      },
      { test: /\.json$/, loader: 'json' }
    ]
  }
}
