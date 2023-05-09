import { createContext, React, useContext } from "react";

const usersContext = createContext(null);
// custom hook to get all users context used in -> loggedUserContext.jsx
const useUserContext = () => {
  return useContext(usersContext);
}

export { usersContext, useUserContext };