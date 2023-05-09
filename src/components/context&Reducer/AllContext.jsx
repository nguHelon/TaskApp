import { createContext, React, useContext } from "react";

const usersContext = createContext(null);
const useUserContext = () => {
  return useContext(usersContext);
}

export { usersContext, useUserContext };