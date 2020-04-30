const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
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
   //dev-server config
   devServer: {
      contentBase: path.join(__dirname, './dist/'),
      port: 30001,
      compress: true,
      publicPath: '/',
      host: `localhost`,
      stats: 'errors-only',
   },
});
