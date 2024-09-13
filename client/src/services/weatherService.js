import axios from 'axios';

const getWeather = async (location) => {
  const response = await axios.get(`/api/weather?location=${location}`);
  return response.data;
};

export default { getWeather };
