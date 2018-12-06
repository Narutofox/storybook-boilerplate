const glob = require('glob');
const webpack = require('webpack');

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: {
    button: glob.sync(`${__dirname}/components/index.js`),
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js',
    library: 'components',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=100000' }]
  },
  externals: [
    'prop-types',
    'react',
    'react-dom',
  ],
  plugins: [
    new UglifyJsPlugin({ minimize: true }),
  ],
};
