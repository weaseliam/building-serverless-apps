const nodeExternals = require('webpack-node-externals');
const serverless = require('serverless-webpack');

process.env.NODE_ENV = 'production';

module.exports = {
  entry: serverless.lib.entries,
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: __dirname,
      exclude: /node_modules/
    }]
  }
};
