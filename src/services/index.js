import fetchData from './fetch'

export const searchGiphy = (search, limit) => {
  try {
    const response = await fetchData({
      method: 'get', // eslint-disable-next-line
      url: `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${process.env.API_GIPHY}&limit=${limit || 1}`,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response;
  } catch (error) {
    return {
      error: true
    };
  }
}