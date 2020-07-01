const Dotenv = require('dotenv-webpack');

//**************************************** */
module.exports = {
   entry: {
      main: './src/client/index.js',
      about: './src/client/about.js',
   },

   devtool: 'source-map',

   output: {
      libraryTarget: 'var',
      library: 'Client',
   },
   //
   //Beginning of module
   module: {
      rules: [
         {
            test: '/.m?js$/',
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: 'babel-loader',
            },
         },

         {
            test: /\.html$/,
            use: ['html-loader'],
         },
      ],
   },
   //end of modules

   //end dev-server
   //
   //Beginning of plugins
   plugins: [new Dotenv()],
   //end of plugins
};
