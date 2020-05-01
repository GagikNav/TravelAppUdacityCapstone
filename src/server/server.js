const port = process.env.port || 30002;
const webpack = require('webpack');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const fetch = require('node-fetch');
const pixBayApiKey = process.env.PixBay_Api_Key;
const weathApiKey = process.env.Weath_Api_Key;
const geoApiID = process.env.Geoname_API_ID;
//*****************

//$Variables
//**************** */

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

/* Initialize the main project folder*/
app.use(express.static('dist'));

// Main PostRoute

app.post(`/mypostroute`, (req, res) => {
   formData = req.body;

   console.log(`\n\nThis is form Data:\n`, formData);

   mainFn(formData).then((data) => {
      res.json(data);
      // console.log(data); //Its working
   });
});
//https://api.weatherbit.io/v2.0/history/daily?lat=${lat}&lon=${lng}&start_date=2020-04-27&end_date=2020-04-28&key=${weathApiKey}
// `http://localhost:${port}/myPostRoute`;
// Get data from APIs //

async function mainFn(formData) {
   const GeoURL = `http://api.geonames.org/searchJSON?q=${formData.city}&username=${geoApiID}&maxRows=2`;
   const geoData = await getGeoData(GeoURL);
   let data = {};
   const pixBayURL = `https://pixabay.com/api/?key=${pixBayApiKey}&q=${formData.city}&image_type=photo&orientation=horizontal&category=places&editors_choice=true`;

   try {
      let cityName = geoData.geonames[0].name;
      let lng = Number(geoData.geonames[0].lng).toFixed(2);
      let lat = Number(geoData.geonames[0].lat).toFixed(2);

      const currentURL = `https://api.weatherbit.io/v2.0/history/daily?lat=${lat}&lon=${lng}&start_date=${formData.startDate}&end_date=${formData.endDate}&key=${weathApiKey}
`;
      //!There should be error handling for this part

      const imgUrl = await getpixBayData(pixBayURL); //getting image url
      const webFormatImage = imgUrl.hits[0].webformatURL;
      const wData = await getCurrentData(currentURL); // getting weather data
      // console.log(wData);
      const weatherData = {
         cityName: wData.city_name,
         temp: wData.data[0].temp,
         clouds: wData.data[0].clouds,
         image: webFormatImage,
      };
      data = weatherData;
      return data;
   } catch (error) {
      console.error('error', error);
   }
}

//***********	***** *

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

async function getGeoData(url) {
   const respond = await fetch(url);
   try {
      const data = await respond.json();

      return data;
   } catch (error) {
      console.error('error', error);
   }
}

//

const getpixBayData = async (url) => {
   const res = await fetch(url);
   try {
      const data = await res.json();

      return data;
   } catch (error) {
      console.error('error', error);
   }
};

/*  Running  server*/
//
app.listen(port, () => {
   console.log(`running on localhost: ${port}.....`);
});
