import axios from 'axios';

export const counterFetcher = () =>
  axios
    .get(`${process.env.REACT_APP_COUNTER_URL}/counter`)
    .then((response) => response.data.value);
