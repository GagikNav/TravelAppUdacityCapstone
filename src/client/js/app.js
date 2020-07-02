const PORT = process.env.PORT;
if (PORT == null || PORT == '') {
   PORT = 26765;
}
let serverData = {}; //Data that is getting back from server

// Form section
//
const handleSubmit = (event) => {
   event.preventDefault();
   const city = document.getElementById('cityInput').value.toUpperCase(),
      startDate = document.getElementById('startDate').value,
      endDate = document.getElementById('endDate').value,
      tripDays = Client.daysCalc(startDate, endDate).timeDifferenceInDays,
      untilDepDayInDays = Client.daysCalc(startDate, endDate).untilDepDayInDays, //this data is from day calculator
      untilDepDayInHour = Client.daysCalc(startDate, endDate).untilDepDayInHour, //this data is from day calculator
      wurl = untilDepDayInDays > 5 ? `forecast` : `current`, // Choosing  to use which URL
      //This is  Form data object for sending to server
      formObj = {
         city,
         startDate,
         endDate,
         tripDays,
         untilDepDayInDays,
         untilDepDayInHour,
         wurl,
      };
   // Sending Data to server
   Client.postData(`http://localhost:${PORT}/mypostroute`, formObj).then(
      async (data) => {
         serverData = await data;
         try {
            console.log(serverData);
            Client.updateUI(serverData);
         } catch (error) {
            console.log(error);
         }
      }
   );
};

export { handleSubmit };
