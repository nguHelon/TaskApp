import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, LogIn } from "./components/components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  )
}

export default App
