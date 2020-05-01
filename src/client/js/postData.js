const postData = async (url = '', data = {}) => {
   const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
   });
   try {
      const newData = await response.json();
      // console.log(newData);
      return newData;
   } catch (error) {
      console.error('Error!!', error);
   }
};
export { postData };
