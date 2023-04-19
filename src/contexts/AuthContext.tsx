import { createContext } from 'react';

import { UserDTO } from '@dtos/UserDTO';

export type AuthContextDataProps = {
  user: UserDTO;
}

export const AuthContex = createContext<AuthContextDataProps>({} as AuthContextDataProps );

