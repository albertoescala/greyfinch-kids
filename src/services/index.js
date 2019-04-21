import fetchData from './fetch'

const apiKey = process.env.REACT_APP_API_GIPHY

export const searchGiphy = async (search, limit, offset) => {
  try {
    const { data, pagination } = await fetchData({
      method: 'get',
      url: `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&limit=${limit || 1}&offset=${offset || 1}`,
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return {
      data,
      pagination
    };
  } catch (error) {
    return {
      error: true
    };
  }
}

export const getRandomGiphyByTag = async (search, limit) => {
  try {
    const { data } = await fetchData({
      method: 'get',
      url: `http://api.giphy.com/v1/gifs/random?tag=${search}&api_key=${process.env.REACT_APP_API_GIPHY}&limit=${limit || 1}`,
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return data;
  } catch (error) {
    return {
      error: true
    };
  }
}