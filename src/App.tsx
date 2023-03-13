import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main/Main";
import Project from "./pages/Project";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Project />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
