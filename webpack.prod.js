const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

//**************************************** */

module.exports = merge(common, {
   mode: 'production',
   //
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[contentHash].bundle.js',
   },
   //
   optimization: {
      minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
   },
   //
   stats: 'verbose',
   //
   module: {
      rules: [
         {
            test: /\.(svg|png|jpg|gif)$/,
            use: {
               loader: 'file-loader',
               options: {
                  name: '[name].[hash].[ext]',
                  outputPath: 'imgs',
               },
            },
         },
         {
            test: /\.scss$/,
            use: [
               MiniCssExtractPlugin.loader, //3. Inject styles into DOM
               'css-loader', //2. Turns css into commonjs
               'sass-loader', //1. Turns sass into css
            ],
         },
      ],
   },
   //
   plugins: [
      new WorkboxPlugin.GenerateSW({
         swDest: 'service-worker.js',
         clientsClaim: true,
         skipWaiting: true,
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
         filename: '[name].[contentHash].css',
      }),

      new HtmlWebpackPlugin({
         template: './src/client/views/index.html',
         filename: './index.html',
         chunks: ['main'],
         minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true,
         },
      }),

      new HtmlWebpackPlugin({
         template: './src/client/views/about.html',
         filename: './about.html',
         chunks: ['about'],
         minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true,
         },
      }),
   ],
   //
});
