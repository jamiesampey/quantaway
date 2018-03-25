const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    './client/components/index',
  ],
  target: 'web',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: path.resolve('./client'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [ 'env', 'react' ]
        }
      }],
    },
    {
      test: /\.css$/,
      include: [
        path.resolve('./client')
      ],
      use: [
        { loader: 'css-hot-loader' },
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer({ browsers: ['> 1%', 'IE >= 10'] })],
          },
        },
      ],
    },
    {
      test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
      loader: 'url-loader'
    }],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 8000,
    proxy: {
      '*': 'http://localhost:3000'
    }
  },
  output: {
    path: path.resolve('./client/build'),
    filename: 'client.bundle.js',
    publicPath: '/',
  },
};