const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//**************************************** */

module.exports = merge(common, {
   mode: 'development',
   watch: true,
   //
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].bundle.js',
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
                  name: '[name].[ext]',
                  outputPath: 'imgs',
               },
            },
         },
         {
            test: /\.scss$/,
            use: [
               'style-loader', //3. Inject styles into DOM
               'css-loader', //2. Turns css into commonjs
               'sass-loader', //1. Turns sass into css
            ],
         },
      ],
   },
   //dev-server config
   devServer: {
      contentBase: path.join(__dirname, './dist/'),
      port: 30002,
      compress: true,
      publicPath: '/',
      host: `localhost`,
      stats: 'errors-only',
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/client/views/index.html',
         filename: './index.html',
         chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
         template: './src/client/views/about.html',
         filename: './about.html',
         chunks: ['about'],
      }),
   ],
});
