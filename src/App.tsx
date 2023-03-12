import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main/Main";
import Task from "./pages/Task";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Task />} />
      </Routes>
    </div>
  );
};

export default App;
