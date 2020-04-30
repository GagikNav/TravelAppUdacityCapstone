const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

//**************************************** */
module.exports = {
   entry: {
      main: './src/client/index.js',
      about: './src/client/about.js',
   },

   devtool: 'inline-source-map',

   output: {
      libraryTarget: 'var',
      library: 'Client',
   },
   //
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
            test: '/.html$/',
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[name].[hash].[ext]',
                  },
               },
            ],
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

   //end dev-server
   //
   //Beginning of plugins
   plugins: [
      new Dotenv(),
      // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
      // new CleanWebpackPlugin(),
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
   //end of plugins
};
