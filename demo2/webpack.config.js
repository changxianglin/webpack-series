const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './1020.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'Output Management'
    })
  ],
  devServer: {
    contentBase: 'dist',
    port: 8000,
    open: true
  }
}