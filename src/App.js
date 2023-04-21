import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TuiCalendar, SignUp, Login, TodoChart, Chat } from "./Pages/index";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/calendar" element={<TuiCalendar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/chart" element={<TodoChart />} />
            <Route path="/" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
