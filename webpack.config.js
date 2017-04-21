const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ClosureCompilerPlugin = require('webpack-closure-compiler')

module.exports = {
  entry: {
    'lambda-service': path.join(__dirname, 'src/index')
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
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
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: path.join(__dirname, 'serverless.yml')}
    ]),
    new ClosureCompilerPlugin({
      compiler: {
        language_in: 'ECMASCRIPT6',
        language_out: 'ECMASCRIPT5',
        compilation_level: 'SIMPLE'
      },
      concurrency: 3
    })
  ]
}
