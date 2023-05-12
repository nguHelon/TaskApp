import { useReducer, React, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, LogIn, UserSideBar, UserBody, UserTasks, UserMeetings, AdminSideBar, AdminDashboard, AdminUsers, AdminMeetings, AdminTasks, AddUserForm, AddTaskForm, AddMeetingForm } from "./components/components";
import { CurrentUserProvider } from "./components/context&Reducer/loggedUserContext";
import stateReducer from "./components/context&Reducer/StateReducer";
import { getNewuserId } from "./components/context&Reducer/StateReducer";

// All contexts
import { usersContext } from "./components/context&Reducer/AllContext";
// import { useGetFromLocalStorage } from "./components/localstorage";

function App() {
  const [allUsers, dispatch] = useReducer(stateReducer, []);
  const currentUserId = getNewuserId();
  const defaultValue = [
    {
      id: 1,
      name: "Ngu Helon",
      password: "admin",
      image: "avatar1.jpg",
      tasks: {
          inProgress: 0,
          completed: 0,
          onHold: 0,
          totalTasks: 0
      },
      meetings: [],
    }
  ];

  useEffect(() => {    
    const appData = (localStorage.getItem("appData") == null ? {users: defaultValue} : JSON.parse(localStorage.getItem("appData")));
    dispatch({
      type: "setAllUsers",
      users: appData.users
    })
  }, []);

  console.log(allUsers)

  useEffect(() => {
    const prevValue = localStorage.getItem("appData") == null ? {users: defaultValue} : JSON.parse(localStorage.getItem("appData"));

    let newValue = allUsers.filter((user) => {
      if (user.id === currentUserId) {
        return user;
      }
    })

    if(newValue[0] === undefined) {
      localStorage.setItem("appData", JSON.stringify({...prevValue, users: [...prevValue.users]}));
    } else if (newValue != []) {
      localStorage.setItem("appData", JSON.stringify({...prevValue, users: [...prevValue.users, newValue[0]]}));
    }

    
  }, [allUsers]);

  return (
    <usersContext.Provider value={{allUsers, dispatch}}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/login" 
          element={
            <CurrentUserProvider>
              <LogIn />
            </CurrentUserProvider>
          } 
        />   

        <Route 
          path="/mydashboard" 
          element={
            <CurrentUserProvider>
              <UserSideBar />
            </CurrentUserProvider>
          } 
        >
          <Route index element={<UserBody />} />
          <Route path="tasks" element={<UserTasks />} />
          <Route path="meetings" element={<UserMeetings />} />
        </Route>   

        <Route path="/admindashboard" element={<AdminSideBar />} >
          <Route index element={<AdminDashboard />} />
          <Route path="adminusers" element={<AdminUsers />} />
          <Route path="adminmeetings" element={<AdminMeetings />} />
          <Route path="admintasks" element={<AdminTasks />} />
        </Route>

        <Route path="adduser" element={<AddUserForm />} />
        <Route path="addtask" element={<AddTaskForm />} />
        <Route path="addmeeting" element={<AddMeetingForm />} />
      </Routes>
    </usersContext.Provider>
  )
}

export default App;
