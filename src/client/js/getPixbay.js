const city = 'london';
const pixBayURL = `https://pixabay.com/api/?key=${pixBayApiKey}&q=${city}&image_type=photo&orientation=horizontal&category=places&editors_choice=true`;
const pixBayApiKey = '16151623-faff4b778440a2f67b4567d8e';

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
   console.log(data.hits);
   let imgUrl = data.hits[0].largeImageURL;
   let cityImage = document.createElement('IMG');
   cityImage.setAttribute('src', imgUrl);
   document.body.appendChild(cityImage);
});
