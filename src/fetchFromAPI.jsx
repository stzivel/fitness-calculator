import axios from 'axios';

export const BASE_URL = 'https://fitness-calculator.p.rapidapi.com/dailycalorie?'

const options = {
  params: {

   },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (age, gender, height, weight, activitylevel) =>{
  const { data } = await axios.get(`${BASE_URL}age=${age}&gender=${gender}&weight=${weight}&height=${height}&activitylevel=${activitylevel}`,options);
  return data;
}


