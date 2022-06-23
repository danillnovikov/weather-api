import { GET_DATA } from './actionTypes';
import axios from 'axios';

export const axiosData = () => async (dispatch) => {
  try {
    const data = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather?lat=54&lon=28&appid=6d01de03448686118a6236bfa16db157'
    );

    dispatch(getData(data));
  } catch {
    throw new Error('Ooops....');
  }
};

export const getData = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  };
};
