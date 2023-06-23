import axios from 'axios';

const Axios = (apiKey) => {
  return axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    params:{
      language: 'language=en-US'
    }
  });
}

export default Axios;