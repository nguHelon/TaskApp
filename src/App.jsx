import { useContext, React} from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, LogIn, UserSideBar, UserBody, UserTasks, UserMeetings, AdminSideBar, AdminDashboard, AdminUsers, AdminMeetings, AdminTasks, AddUserForm, AddTaskForm, AddMeetingForm } from "./components/components";

// All contexts
import { usersContext, currentUserContext } from "./components/context&Reducer/AllContext";
import { users } from "./components/AppData";

function App() {

  return (
    <usersContext.Provider value={users}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/mydashboard" element={<UserSideBar />} >
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
