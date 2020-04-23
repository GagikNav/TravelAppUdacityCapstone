const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//$Variables
let projectData = {};
const data = [];

//% Webpack config
const config = require('../../webpack.server');
const compiler = webpack(config);
//*************************** */
// Tell express to use the webpack-dev-middleware and use the webpack.server.js
// configuration file as a base.
app.use(
   webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
   })
);
//***********	***** */

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

/* Initialize the main project folder*/
app.use(express.static('dist'));

const port = process.env.port || 30001;
/* Spin up the server*/
const server = app.listen(port, listening);
function listening() {
   // console.log(server);
   console.log(`running on localhost: ${port}`);
}
//Get Rout
app.get('/myGetRout', (req, res) => {
   res.send(projectData);
   console.log(projectData);
});

// post Rout
app.post('/myPostRout', (req, res) => {
   projectData = req.body;
});
