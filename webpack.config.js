const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');

//**************************************** */
module.exports = {
   entry: './src/client/index.js',

   mode: 'development',
   devtool: 'inline-source-map',

   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].bundle.js',
      libraryTarget: 'var',
      library: 'Client',
   },
   //Beginning of module
   module: {
      rules: [
         {
            test: '/.js$/',
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            test: '/.html$/',
            use: ['html-loader'],
         },
         {
            test: '/.(svg|png|jpg|gif)$/',
            use: {
               loader: 'file-loader',
               options: {
                  name: '[name].[hash].[ext]',
                  output: 'imgs',
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
   //end of modules

   //
   stats: 'verbose',
   //dev-server config
   devServer: {
      contentBase: './dist/',
      port: 30001,
      contentBase: './dist',
      compress: true,
      publicPath: '/',
      stats: 'errors-only',
   },
   //end dev-server
   //
   //Beginning of plugins
   plugins: [
      new Dotenv(),
      // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
      // new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
         title: 'Development',
         template: './src/client/views/index.html',
         filename: './index.html',
      }),
   ],
   //end of plugins
};
