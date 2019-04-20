import fetchData from './fetch'

export const searchGiphy = async (search, limit) => {
  try {
    const { data } = await fetchData({
      method: 'get', // eslint-disable-next-line
      url: `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${process.env.REACT_APP_API_GIPHY}&limit=${limit || 1}`,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return data;
  } catch (error) {
    return {
      error: true
    };
  }
}

export const lol = ''