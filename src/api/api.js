import axios from 'axios';

export const googleAPI = axios.create({
  baseURL: 'https://api.github.com/users/google/',
});

//Setup request/repsonse interceptors
