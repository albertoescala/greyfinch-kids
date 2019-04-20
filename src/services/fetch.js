import axios from 'axios'

async function fetchData(config) {
  try {
    const response = await axios(config)
    return response.data
  } catch (error) {
    return error
  }
}

export default fetchData
