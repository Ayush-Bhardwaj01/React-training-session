import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export const fetchChar = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchCharID = async (id) => {
  const response = await axios.get(`${API_URL}${id}`);
  return response.data;
};