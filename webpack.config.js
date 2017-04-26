const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ClosureCompilerPlugin = require('webpack-closure-compiler')

module.exports = {
  devtool: 'source-map',
  entry: {
    'lambda-service': path.join(__dirname, 'src/index')
  },
  module: {
    rules: [
      {
        test: [ /\.js$/ ],
        include: [/src/],
        exclude: [/\.test.js$/, /node_modules/],
        loader: 'babel-loader'
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: path.join(__dirname, 'serverless.yml')}
    ]),
    new ClosureCompilerPlugin({
      compiler: {
        language_in: 'ECMASCRIPT5',
        language_out: 'ECMASCRIPT5',
        compilation_level: 'SIMPLE',
        create_source_map: true
      },
      concurrency: 3
    })
  ],
  target: 'node'
}
