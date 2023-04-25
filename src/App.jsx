import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, LogIn, UserSideBar, UserBody } from "./components/components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/mydashboard" element={<UserSideBar />} >
          <Route index element={<UserBody />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
