const path = require('path')
const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('./template/index.html'),
          to: path.resolve(__dirname, 'dist'),
        },
      ]
    }),
    new HtmlWebpackPlugin({
      title: 'webpack',
      filename: 'index.html',
      inject: false,
      template: path.resolve(__dirname, './template/index.html'),
    })
  ],
}

module.exports = config
