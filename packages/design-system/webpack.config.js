const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: path.resolve(__dirname, './src/index.ts'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },

  stats: 'errors-only',
};
