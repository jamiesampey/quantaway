const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = function(env) {
  let config = {
    devtool: 'source-map',
    target: 'node',
    entry: [
      'webpack/hot/poll?1000',
      './server/index'
    ],
    output: {
      path: path.resolve('server/build'),
      filename: 'server.bundle.js',
      libraryTarget: 'commonjs',
    },
    externals: [nodeExternals({
      whitelist: ['webpack/hot/poll?1000']
    })],
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: path.resolve('./server'),
          query: {
            presets: ['env'],
          },
        },
      ],
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
  };

  if (env && env.watchServer) {
    const StartServerPlugin = require('start-server-webpack-plugin');
    config.plugins.push(new StartServerPlugin('server.bundle.js'));
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.watch = true;
  }

  return config;
};
