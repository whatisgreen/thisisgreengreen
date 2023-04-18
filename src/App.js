import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TuiCalendar, SignUp, Login, TodoChart } from "./Pages/index";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/calendar" element={<TuiCalendar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/chart" element={<TodoChart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
