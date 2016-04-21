import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: {
    main: 'main.js',
    vendor: [
      'react',
      'react-dom',
    ],
  },
  output: {
    path: `${__dirname}/../../dist`,
    filename: 'bundle.js',
  },
  resolve: {
    root: path.join(`${__dirname}/../js`),
  },
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', './js/vendor.js'),
  ],
};
