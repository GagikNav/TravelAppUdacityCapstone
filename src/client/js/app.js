// const depDate = document.getElementById('depDate').value;
// const arriveDate = document.getElementById('arriveDate').value;
const port = 30002;
let serverData = {}; //Data that is getting back from server
//let serverData = {
//    //Data is  for testing
//    cityName: 'London',
//    temp: 14.3,
//    clouds: 1,
//    image: 'https://pixabay.com/get/53e3d5434f57b10ff3d8992cc62e367b1439dce64e5074417d2c7ed7904cc3_640.jpg',
// };
// Form section
//
const handleSubmit = (event) => {
   event.preventDefault();
   const city = document.getElementById('cityInput').value.toUpperCase();
   const startDate = document.getElementById('startDate').value;
   const endDate = document.getElementById('endDate').value;
   const tripDays = Client.daysCalc(startDate, endDate);
   const wurl = tripDays > 3 ? `forecast` : `current`; // Choosing  to use which URL
   const formObj = { city, startDate, endDate, tripDays, wurl }; // Form data object for sending to server

   // Sending Data to server
   Client.postData(`http://localhost:${port}/mypostroute`, formObj)
      .then((data) => {
         serverData = data;
         console.log(serverData);
      })
      .then(Client.updateUI(serverData));
};

export { handleSubmit };
