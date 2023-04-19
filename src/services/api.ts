import axios from 'axios';
import { AppError } from '@utils/AppError';

const api = axios.create({
  baseURL:'http://192.168.11.200:3333'
})
//1° param se dar sucesso/ 2³ param se der erro
api.interceptors.response.use(response => response, error => {
  if(error.response && error.response.data) {
    return Promise.reject(new AppError(error.response.data.message));
  } else {
    return Promise.reject(error);
  }
});

// response.use((response) =>{
//   console.log('interceptors response!!!!!!', response)
//   return response;
// }, (error) => {
//   console.log('interceptors response!!!!!!', error)
//   return Promise.reject(error);
// });

// request.use((config) => {
//   console.log('DADOS ENVIADOS',config.data)
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// })

export { api };