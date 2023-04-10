import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TuiCalendar } from "./Pages/index";
import TodoChart from "./Components/TodoChart";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/calendar" element={<TuiCalendar />} />
            <Route path="/todoChart" element={<TodoChart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
