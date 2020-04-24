const pixBayApiKey = '16151623-faff4b778440a2f67b4567d8e';
const city = 'london';
const pixBayURL = `https://pixabay.com/api/?key=${pixBayApiKey}&q=${city}&image_type=photo&orientation=horizontal&category=places&editors_choice=true`;

const getpixBayData = async (url) => {
   const res = await fetch(url);
   try {
      const data = await res.json();
      return data;
   } catch (error) {
      console.error('error', error);
   }
};
getpixBayData(pixBayURL).then((data) => {
   let imgUrl = data.hits[0].largeImageURL;
   let x = document.createElement('IMG');
   x.setAttribute('src', imgUrl);
   document.body.appendChild(x);
});
