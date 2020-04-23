const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');

//**************************************** */
module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',

   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   //Beginning of module
   module: {
      rules: [
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
      // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
         title: 'Development',
         template: './src/client/views/index.html',
         filename: './index.html',
      }),
   ],
   //end of plugins
});
