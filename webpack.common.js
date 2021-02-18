const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dir = path.resolve(__dirname, '.');

const PATHS = {
  src: path.join(__dirname, 'src')
}

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: '[name].[chunkhash:8].js',
    path: dir + '/public/',
    publicPath: '/',
  },
  devServer: {
    contentBase: './public/',
  },
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'clean-css-loader',
            'sass-loader',
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html'}),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:8].css',
      chunkFilename: "[id].css"
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    }),
  ]
};