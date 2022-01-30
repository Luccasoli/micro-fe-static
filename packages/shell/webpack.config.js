/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  const devMode = !!env.development;

  return {
    mode: env.production ? 'production' : 'development',
    // base path for resolving entry points and loaders from configuration
    context: path.resolve(__dirname),
    devtool: 'inline-source-map',
    entry: {
      main: path.resolve('src', 'index.jsx'),
    },
    output: {
      path: path.resolve('dist'),
      filename: 'bundle.[contenthash].js',
      clean: true,
    },
    resolve: {
      extensions: ['.jsx', '...'],
    },
    module: {
      rules: [
        {
          test: /\.jsx$/i,
          use: ['babel-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          // More information here https://webpack.js.org/guides/asset-modules/
          type: 'asset',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('src', 'index.html'),
      }),
      ...(devMode ? [] : [new MiniCssExtractPlugin()]),
    ],
  };
};
