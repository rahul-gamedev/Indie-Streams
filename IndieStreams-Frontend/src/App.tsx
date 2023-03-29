import { useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter, useNavigate } from "react-router-dom";

import "./App.css";

//Pages
import HomePage from "./Pages/HomePage";
import CreateAccountPage from "./Pages/CreateAccountPage";
import LoginPage from "./Pages/LoginPage";
import VideoPlayerPage from "./Pages/VideoPlayerPage";
import VideoUploadPage from "./Pages/VideoUploadPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<CreateAccountPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<VideoUploadPage />} />
          {/* <Route path="/video" element={<VideoPlayerPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
