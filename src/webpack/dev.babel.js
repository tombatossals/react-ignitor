import webpack from 'webpack';
import path from 'path';

module.exports = {
  entry: [
    'root.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
  ],
  output: {
    path: `${__dirname}/../../dist`,
    publicPath: '/dist',
    filename: 'bundle.js',
  },
  resolve: {
    root: path.join(`${__dirname}/../js`),
  },
  devServer: {
    contentBase: 'src/www',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
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
