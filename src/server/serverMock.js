const port = process.env.port || 30001;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const fetch = require('node-fetch');

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

/* Initialize the main project folder*/
app.use(express.static('dist'));

// Main PostRoute

const data = {
   cityName: 'London',
   countryName: 'United Kingdom',
   temp: 18.3,
   clouds: 58,
   weather: { icon: 'c03d', code: 803, description: 'Broken clouds' },
   image:
      'https://pixabay.com/get/53e3d5434f57b10ff3d8992cc62e367b1439dce64e5074417d287cdd924dc7_640.jpg',
};
app.post(`/mypostroute`, (req, res) => {
   formData = req.body;

   res.json(data);
   // console.log(data); //Its working
});

//the servers main function

//*****************

//

//

/*  Running  server*/
//
let server = app.listen(port, () => {
   console.log(`running on localhost: ${port}.....`);
});
module.exports = server;
