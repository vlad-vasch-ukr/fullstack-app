import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
});

const responseData = (res) => res.data;

export { Api, responseData };
