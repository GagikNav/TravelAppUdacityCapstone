const getRoute = `http://localhost:30001/myGetRout`;
const postRoute = `http://localhost:30001/myPostRout`;
const depDate = document.getElementById('depDate').value;
const arriveDate = document.getElementById('arriveDate').value;

// Form section
//
const handleSubmit = (event) => {
   event.preventDefault();
   const city = document.getElementById('cityInput').value;
};
//

// Sending Data to server
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

postData(postRoute).then((data) => console.log(data));
//

//User interface function
//
const updateUI = async () => {
   const request = await fetch('/');
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
export { handleSubmit };
