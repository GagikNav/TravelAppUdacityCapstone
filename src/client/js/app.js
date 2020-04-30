// const depDate = document.getElementById('depDate').value;
// const arriveDate = document.getElementById('arriveDate').value;
const port = 30001;
let serverData = {};
// Form section
//
const handleSubmit = (event) => {
   event.preventDefault();
   const city = document.getElementById('cityInput').value.toUpperCase();
   // console.log(city);
   // Sending Data to server
   postData(`http://localhost:${port}/mypostroute`, { city })
      .then((data) => {
         serverData = data;
         console.log(serverData);
      })
      .then(updateUI);
};
// `http://localhost:${port}/myPostRoute`;
async function postData(url = '', data = {}) {
   const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
   });
   try {
      const newData = await response.json();
      // console.log(newData);
      return newData;
   } catch (error) {
      console.error('Error!!', error);
   }
}
//

//
const updateUI = async () => {
   document.getElementById('weatherIcon').src = serverData.icon;
   document.getElementById('photo').src = serverData.image;
   document.getElementById('temp').innerHTML = `Temperature: ` + serverData.temp;
   document.getElementById('weather').innerHTML = `Weather is: ` + serverData.weather;
};
//User interface function
//
/*
const updat = async () => {
   const request = await fetch('/');
   try {
      const allData = await request.json();
      // console.log(allData);
      document.getElementById('date').innerHTML = `date: ` + covertDate(allData.date);
      document.getElementById('temp').innerHTML = `Temperature: ` + allData.temperature;
      document.getElementById('content').innerHTML = `User Feelings: ` + allData.user_respond;
   } catch (error) {
      console.log('error', error);
   }
};
*/
export { handleSubmit };
