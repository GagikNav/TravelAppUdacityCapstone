const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

//$Variables

let projectData = {};
const data = [];

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

/* Initialize the main project folder*/
app.use(express.static('.//'));

const port = process.env.port || 30002;
/* Spin up the server*/
const server = app.listen(port, listening);
function listening() {
   // console.log(server);
   // console.log(process.env);
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
