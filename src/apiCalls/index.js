import axios from 'axios';

export const fetchCovidData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/countries');
  return response.data;
};


export const wordWideData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/all');
  return response.data;
};


export const graphData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  return response.data;
};