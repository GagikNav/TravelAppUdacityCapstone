const cityName = 'london';
const countryCode = 'NL';

const geoApiID = 'gagdev';
const GeoURL = `http://api.geonames.org/searchJSON?q=${cityName}&username=${geoApiID}&maxRows=2`;

//Calling chain of  get , post and UI functions
/*
getData(baseURL)
.then((data) => {
   console.log(data);
   console.log(feelings);
   postData('/myPostRout', {
      temperature: data.main.temp,
      date: data.dt,
      user_respond: feelings,
   });
})
.then(updateUI);
*/
//get data from Geonames API Function
//
let lat = '';
let lng = '';
const getGeoData = async (url) => {
   const res = await fetch(url);
   try {
      const data = await res.json();
      let lat = Number(data.geonames[0].lat).toFixed(2);
      let lng = Number(data.geonames[0].lng).toFixed(2);
      return { lat, lng };
   } catch (error) {
      console.error('error', error);
   }
};

getGeoData(GeoURL).then((pos) => console.log(pos));

//Post Data to server Function
//
/*
const postData = async (url = '', data = {}) => {
   const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
   });
   try {
      const newData = await response.json();
      console.log(newData);
      return newData;
   } catch (error) {
      console.error('Error!!', error);
   }
};

//User interface function
//
const updateUI = async () => {
   const request = await fetch('/myGetRout');
   try {
      const allData = await request.json();
      console.log(allData);
      document.getElementById('date').innerHTML =
         `date: ` + covertDate(allData.date);
      document.getElementById('temp').innerHTML =
         `Temperature: ` + allData.temperature;
      document.getElementById('content').innerHTML =
         `User Feelings: ` + allData.user_respond;
   } catch (error) {
      console.log('error', error);
   }
};
*/
