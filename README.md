# Weather-Journal App Project

## Overview

In This app you can enter travel information. The app expects a city name,departure date, and return date. Using given information, it will get position ( longitude and latitude ) data from Geonames API by sending city name. Then it will send position data to weatherbit and depending how far departure date is, it will get the forecast data in 5 days or 16 days for the weather in that area. Also, it will go to Pixabay and get an image related to that place.

# Technologies used

Node.js,
Webpack,
Express,
Babel,
WorkerBox,
Jest

## Instructions

-  npm install
-  Start the server npm run nodemon
-  npm run build-prod
-  It is required to create ".env " file in root with a following data which should be obtain from three APIs.
   -  Geoname_API_ID = \***\*\*\*\*** => geonames.org api user Name
   -  Weath_Api_Key = e6b**\***52 => weatherbit.io api key
   -  PixBay_Api_Key= 1\***\*\*\*\*\***4d8e => pixabay.com api key
-  For test:
   -  npm test

## References

APIs from "weatherbit.io", "geonames.org" and "pixabay.com" were used in this project.
