import axios, { AxiosInstance } from 'axios';
import { AppError } from '@utils/AppError';

type SignOut = () => void;

type APIInstanceProps = AxiosInstance & {
  registerInterceptTokenManager: (signOut: SignOut) => () => void;
}

const api = axios.create({
  baseURL:'http://192.168.11.200:3333'
}) as APIInstanceProps;

api.registerInterceptTokenManager = signOut => {
  const interceptTokenManager = api.interceptors.response.use(response => response, error => {
    if(error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(error);
    }
    
  });
  return () => {
    api.interceptors.response.eject(interceptTokenManager)
  }
}

export { api };

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