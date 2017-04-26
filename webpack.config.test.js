const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: [ /\.js.?$/ ],
        include: [/src/],
        loader: 'babel-loader'
      },
      { test: /\.json$/, loader: 'json' }
    ]
  }
}
