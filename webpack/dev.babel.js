import webpack from 'webpack';
import path from 'path';

module.exports = {
  entry: [
    'main.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
  ],
  output: {
    path: `${__dirname}/../dist`,
    publicPath: '/dist',
    filename: 'bundle.js',
  },
  resolve: {
    root: path.join(`${__dirname}/../src`),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};
