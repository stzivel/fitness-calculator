import axios from 'axios';

export const BASE_URL = 'https://fitness-calculator.p.rapidapi.com/dailycalorie?'

const options = {
  params: {

   },
  headers: {
    'X-RapidAPI-Key': 'c347851e80msh7e86a760ca4fe3bp13a181jsn772517902f16',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (age, gender, height, weight, activitylevel) =>{
  const { data } = await axios.get(`${BASE_URL}age=${age}&gender=${gender}&weight=${weight}&height=${height}&activitylevel=${activitylevel}`,options);
  return data;
}


