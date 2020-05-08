//User interface Update function
//
const updateUI = async (serverData) => {
   await serverData;
   try {
      // console.log(serverData);
      const wIcon = `https://www.weatherbit.io/static/img/icons/${serverData.weather.icon}.png `;

      document.getElementById('travelInfo').style = 'display:block';
      document.getElementById('welcome').style = 'display:none';

      document.getElementById('image').src = serverData.image;
      document.getElementById('weatherIcon').src = wIcon;
      document.getElementById('temp').innerHTML = serverData.temp;
      document.getElementById('weather').innerHTML =
         serverData.weather.description;
      document.getElementById('country').innerHTML = serverData.countryName;
      document.getElementById('city').innerHTML = serverData.cityName;
      document.getElementById('day').innerHTML = serverData.tripLength;
   } catch (e) {
      console.error(e);
   }
};
export { updateUI };
