const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
// const webpackDevMiddleware = require('webpack-dev-middleware');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const fetch = require('node-fetch');
let cityName = '';
let lat = '';
let lng = '';
let weather = '';
let temp = '';
const pixBayApiKey = process.env.PixBay_Api_Key;
const weathApiKey = process.env.Weath_Api_Key;
const geoApiID = process.env.Geoname_API_ID;
//*****************

//$Variables
let projectData = {};
const data = [];

/*
//% Webpack config
const config = require('../../webpack.server');
const compiler = webpack(config);
*/
//*************************** */
/*
// Tell express to use the webpack-dev-middleware and use the webpack.server.js
// configuration file as a base.
app.use(
   webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
   })
);
*/
//***********	***** */

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

/* Initialize the main project folder*/
app.use(express.static('./../client/views/'));

/*  server*/

let pData = '';
app.get('/', (req, res) => {
   res.sendFile(path.resolve('./src/client/views/index.html'));
});
app.post('/', (req, res) => {
   let cityName = req.body.cityName.toUpperCase();
   const GeoURL = `http://api.geonames.org/searchJSON?q=${cityName}&username=${geoApiID}&maxRows=2`;

   const getGeoData = async (url) => {
      const respond = await fetch(url);
      try {
         const data = await respond.json();
         let lat = Number(data.geonames[0].lat).toFixed(2);
         let lng = Number(data.geonames[0].lng).toFixed(2);
         return { lat, lng };
      } catch (error) {
         console.error('error', error);
      }
   };
   //

   //
   getGeoData(GeoURL).then((pos) => {
      //
      console.log(pos);
      let imgUrl;
      let lat = pos.lat;
      let lng = pos.lng;
      const currentURL = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&days=16&key=${weathApiKey}`;
      async function getCurrentData(url) {
         //const forecastURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&days=16&key=${weathApiKey}`;
         const respond = await fetch(url);
         try {
            const data = await respond.json();

            return data;
         } catch (error) {
            console.error('error', error);
         }
      }
      //
      const pixBayURL = `https://pixabay.com/api/?key=${pixBayApiKey}&q=${cityName}&image_type=photo&orientation=horizontal&category=places&editors_choice=true`;

      const getpixBayData = async (url) => {
         const res = await fetch(url);
         try {
            const data = await res.json();
            return data;
         } catch (error) {
            console.error('error', error);
         }
      };
      getpixBayData(pixBayURL).then((data) => {
         console.log(data.hits[0]);
         let imgUrl = data.hits[0].webformatURL;
         res.write(`<p><img src= "${imgUrl}"  class="icon" alt=""></p>`);
      });

      //
      getCurrentData(currentURL).then((data) => {
         let pData = data;
         let wIcon = data.data[0].weather.icon;
         let iconPath = path.resolve(
            path.join('./src/client/weatherIcons/', wIcon)
         );
         const fileUrl = ` https://www.weatherbit.io/static/img/icons/${wIcon}.png`;

         res.write(
            `<p>The wether in ${cityName} is ${data.data[0].weather.description} and temperature  is : ${data.data[0].temp} degree</p><p><img src= "${fileUrl}"  class="icon" alt=""></p>`
         );
         res.send();
      });
   });
});

const port = process.env.port || 30002;
app.listen(port, () => {
   console.log(`running on localhost: ${port}.....`);
});
