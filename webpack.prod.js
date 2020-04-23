const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

//**************************************** */

module.exports = merge(common, {
   mode: 'production',
   output: {
      filename: '[name].[contentHash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   //
   stats: 'errors-warnings',
   //
   devtool: 'source-map',
});
