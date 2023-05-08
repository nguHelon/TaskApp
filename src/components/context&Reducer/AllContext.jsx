import { createContext, React } from "react";
import { users } from "../AppData";

const usersContext = createContext(null);
const currentUserContext = createContext(null);

export { usersContext, currentUserContext };