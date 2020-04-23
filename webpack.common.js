const Dotenv = require('dotenv-webpack');

//**************************************** */

module.exports = {
   entry: './src/client/index.js',
   //
   output: {
      libraryTarget: 'var',
      library: 'Client',
   },

   //
   devtool: 'source-map', //none
   //
   stats: {
      // colors: false,
      depth: true,
      errorDetails: true,
   },
   //
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
      ],
   },
   //

   plugins: [new Dotenv()],
   //

   //
};
