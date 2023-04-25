import { SetStateAction, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter, useNavigate } from "react-router-dom";

import "./App.css";

//Pages
import HomePage from "./Pages/HomePage";
import CreateAccountPage from "./Pages/CreateAccountPage";
import LoginPage from "./Pages/LoginPage";
import VideoPlayerPage from "./Pages/VideoPlayerPage";
import VideoUploadPage from "./Pages/VideoUploadPage";
import ProfilePage from "./Pages/ProfilePage";

type user = {
  id: number | undefined;
  name: string | null;
  email: string | null;
  password: string | null;
};

function App() {
  const [user, setUser] = useState<user>();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") || "{}"));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<CreateAccountPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/upload" element={<VideoUploadPage />} />
          <Route path="/movie/:id" element={<VideoPlayerPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
