import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, LogIn, UserSideBar, UserBody, UserTasks, UserMeetings } from "./components/components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/mydashboard" element={<UserSideBar />} >
          <Route index element={<UserBody />} />
          <Route path="tasks" element={<UserTasks />} />
          <Route path="meetings" element={<UserMeetings />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
