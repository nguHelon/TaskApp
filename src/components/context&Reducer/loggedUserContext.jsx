import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../AppData";
import { useUserContext } from "./AllContext";

const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const reducerData = useUserContext();

    const getUser = (userInfo) => {
        const { name, password } = userInfo;
        const filteredUser = reducerData.allUsers.filter((user) => {
            if ((user.name == name) && (user.password == password)) {
                return user;
            }
        })

        if (filteredUser) {
            filteredUser.forEach((user) => {
                if (user.name == "Ngu Helon" && user.password == "admin") {
                    setUser(user);
                    navigate("/admindashboard");
                } else {
                    setUser(user);
                    navigate("/mydashboard");
                }
            })
        } else {
            navigate("/login");
        }   
    }

    return (
        <CurrentUserContext.Provider value={{user, getUser}}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export const useCurrentUserContext = () => {
    return useContext(CurrentUserContext);
}