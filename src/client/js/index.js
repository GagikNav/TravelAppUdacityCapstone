/* Global Variables */
//my API  key
const apiKey = '91c09a00658a668ebbb285c459fcd8aa';
// const zip = '1019';

// Function for converting Date
function covertDate(date) {
	let d = new Date();
	let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();
	return newDate;
}

document.getElementById('generate').addEventListener('click', go);

// This is the main implementing function which listening to click on generate bottom
//=>
//
function go(e) {
	//getting zip code from Dom
	const zipCode = document.getElementById('zip').value;
	//generating OpenWeather API call

	const baseURL = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;

	//Getting user feelings from Dom
	//
	const feelings = document.getElementById('feelings').value;

	//Calling chain of  get , post and UI functions
	//
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
}

//get data from OpenWeather API Function
//
const getData = async (baseURL) => {
	const res = await fetch(baseURL);
	try {
		const data = await res.json();
		console.log(data);
		return data;
	} catch (error) {
		console.log('error', error);
	}
};

//Post Data to server Function
//
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
		document.getElementById('date').innerHTML = `date: ` + covertDate(allData.date);
		document.getElementById('temp').innerHTML = `Temperature: ` + allData.temperature;
		document.getElementById('content').innerHTML = `User Feelings: ` + allData.user_respond;
	} catch (error) {
		console.log('error', error);
	}
};
