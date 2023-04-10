import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TuiCalendar } from "./Pages/index";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/calendar" element={<TuiCalendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
