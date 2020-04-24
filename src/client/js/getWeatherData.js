const weathApiKey = 'e60b676ab0b24ad3b4b69051d1cb2b52';
const lat = 51.51;
const lng = -0.13;
const forecastURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&days=16&key=${weathApiKey}`;
const currentURL = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&days=16&key=${weathApiKey}`;

const getForecastData = async (url) => {
   const res = await fetch(url);
   try {
      const data = await res.json();
      return data;
   } catch (error) {
      console.error('error', error);
   }
};
getForecastData(forecastURL).then((data) => console.log(data));

const getCurrentData = async (url) => {
   const res = await fetch(url);
   try {
      const data = await res.json();
      return data;
   } catch (error) {
      console.error('error', error);
   }
};
getCurrentData(currentURL).then((data) => console.log(data));
