const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './server/index.js',
  externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.csr.html',
      template: 'src/index.csr.html',
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', ['@babel/preset-env']]
        }
      },
      {
        test: /\.css$/,
        loader: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              // 启用css-module
              modules: true
            }
          }
        ]
      }
    ]
  }
};
