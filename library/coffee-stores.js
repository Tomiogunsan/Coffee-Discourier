


export const fetchCoffeeStores = async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.FOURSQUARE_KEY,
        }
      };
      
      const response = await fetch('https://api.foursquare.com/v3/places/search?query=coffee%20stores&ll=9.044417%2C7.409720&limit=12', options)
        const data = await response.json()
      console.log(data.results);
}