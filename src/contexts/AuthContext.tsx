import { ReactNode, createContext } from 'react';

import { UserDTO } from '@dtos/UserDTO';

export type AuthContextDataProps = {
  user: UserDTO;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContex = createContext<AuthContextDataProps>({} as AuthContextDataProps );

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <AuthContex.Provider value={{
      user :{
        id: '1',
        name:'Lucas',
        email:'teste@teste.com',
        avatar: 'lucas.png'
      }
    }}>
      {children}
    </AuthContex.Provider>
  )
}