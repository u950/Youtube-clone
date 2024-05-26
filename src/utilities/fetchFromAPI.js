import axios from 'axios';
// import dotenv from 'dotenv'

const Baseurl = 'https://youtube-v31.p.rapidapi.com';

const options = {

    url: Baseurl,
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchfromAPI = async (url) => {
  const {data} = await axios.get(`${Baseurl}/${url}` , options);

  return data;   // desstructing to data element
}