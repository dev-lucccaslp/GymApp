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
  const interceptTokenManager = api.interceptors.response.use(response => response, requestError => {
    if(requestError?.response?.status === 401){
      if(requestError.response.data?.message === 'token.expired' || requestError.response.data?.message === 'token.invalid') {

      }
      signOut();
    }

    if(requestError.response && requestError.response.data) {
      return Promise.reject(new AppError(requestError.response.data.message));
    } else {
      return Promise.reject(requestError);
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