import { useContext } from "react";

import { AuthContex } from '@contexts/AuthContext';

export function useAuth(){
  const context = useContext(AuthContex);

  return context;
}