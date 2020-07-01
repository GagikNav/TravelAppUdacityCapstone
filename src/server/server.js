// const PORT = process.env.PORT || 30001;
const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const fetch = require('node-fetch');
const pixBayApiKey = process.env.PixBay_Api_Key;
const weatherApiKey = process.env.Weath_Api_Key;
const geoApiID = process.env.Geoname_API_ID;
//*****************

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

/* Initialize the main project folder*/
app.use(express.static('dist'));

// Main PostRoute

app.post('/mypostroute', (req, res) => {
   formData = req.body;
   // console.log(req); //Its working
   mainFn(formData).then((data) => {
      res.json(data);
   });
});

app.get('/test', (req, res) => {
   res.json({ value: 'hello!' });
});
//the servers main function

async function mainFn(formData) {
   let data = {};
   const GeoURL = `http://api.geonames.org/searchJSON?q=${formData.city}&username=${geoApiID}&maxRows=2`;
   const geoData = await getData(GeoURL);
   const pixBayURL = `https://pixabay.com/api/?key=${pixBayApiKey}&q=${formData.city}&image_type=photo&orientation=horizontal&category=places&editors_choice=true`;
   try {
      const //==>
         lng = Number(geoData.geonames[0].lng).toFixed(2),
         lat = Number(geoData.geonames[0].lat).toFixed(2),
         countryName = geoData.geonames[0].countryName,
         currentURL = `https://api.weatherbit.io/v2.0/forecast/hourly?lat=${lat}&lon=${lng}&key=${weatherApiKey}&hours=${formData.untilDepDayInHour}`,
         forecastURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weatherApiKey}`,
         url = formData.wurl === 'current' ? currentURL : forecastURL; //checking which URL should be used

      const imgUrl = await getData(pixBayURL); //getting image url //!There should be error handling for this part
      const webFormatImage = imgUrl.hits[0].webformatURL;

      // getting weather data ==> store theme in the {weatherData} object

      const wData = await getData(url);
      const weatherData = {
         cityName: wData.city_name,
         countryName: countryName,
         temp: wData.data[wData.data.length - 1].temp,
         clouds: wData.data[wData.data.length - 1].clouds,
         weather: wData.data[wData.data.length - 1].weather,
         image: webFormatImage,
         tripLength: formData.tripDays,
      };
      console.log(formData);
      data = weatherData;
      console.log(`This is data from API will sent to app: \n`, data);
      return data;
   } catch (error) {
      console.error('error', error);
   }
}

//*****************

async function getData(url) {
   const respond = await fetch(url);
   try {
      const data = await respond.json();
      return data;
   } catch (error) {
      console.error('error', error);
   }
}
//

//

/*  Running  server*/
//
app.listen(PORT, () => {
   console.log(`Running on localhost: ${PORT}.....`);
});
