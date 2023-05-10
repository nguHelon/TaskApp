import { useReducer, React} from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, LogIn, UserSideBar, UserBody, UserTasks, UserMeetings, AdminSideBar, AdminDashboard, AdminUsers, AdminMeetings, AdminTasks, AddUserForm, AddTaskForm, AddMeetingForm } from "./components/components";
import { CurrentUserProvider } from "./components/context&Reducer/loggedUserContext";
import stateReducer from "./components/context&Reducer/StateReducer";

// All contexts
import { usersContext } from "./components/context&Reducer/AllContext";
import { users } from "./components/AppData";

function App() {
  const [allUsers, dispatch] = useReducer(stateReducer, users);

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
