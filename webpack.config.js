const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
  entry: './lib/renderers/dom.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        include: /lib/,
      },
    ],
  },
  plugins: [new CheckerPlugin()],
  resolve: {
    modules: [path.resolve('lib'), path.resolve('node_modules')],
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
}
