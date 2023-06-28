import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp, Login, Chat, Modal, Modal2, WorkLog } from "./index";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Chat />} />
            <Route path="/:room" element={<Chat />} />
            <Route path="/chat_modal" element={<Modal />} />
            <Route path="/user_modal" element={<Modal2 />} />
            <Route path="/work_log" element={<WorkLog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;