/* Empty JS object to act as endpoint for all routes */
projectData = {
	temperature: '',
	date: '',
	user_respond: '',
};

const data = [];
/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
app.use(express.json());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 8000;
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
