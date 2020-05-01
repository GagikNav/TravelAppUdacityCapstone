//User interface function
//
const updateUI = (serverData) => {
   let wIcon = '';
   // if (serverData.clouds < 33) {
   //    document.getElementById('weatherIcon').src = 'https://www.weatherbit.io/static/img/icons/c01n.png';
   // } else if (serverData.clouds > 33 || serverData.clouds < 67) {
   //    document.getElementById('weatherIcon').src = 'https://www.weatherbit.io/static/img/icons/c01n.png';
   // } else {
   //    document.getElementById('weatherIcon').src = 'https://www.weatherbit.io/static/img/icons/c01n.png';
   // }

   // document.getElementById('photo').src = serverData.image;
   document.getElementById('temp').innerHTML = `Temperature is mostly : ` + serverData.temp;
   // document.getElementById('weather').innerHTML = `Weather is: ` + serverData.weather;
};
export { updateUI };
