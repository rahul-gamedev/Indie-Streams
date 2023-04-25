import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import MovieRow from "../Components/MovieRow";
import { useNavigate } from "react-router-dom";
import MovieCard from "../Components/MovieCard";
import axios from "axios";

type user = {
  id: number | undefined;
  name: string;
  email: string;
  password: string;
};

type movie = {
  id: string;
  title: string;
  description: string;
  video: string;
  poster: string;
};

const ProfilePage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<user>();

  const [myMovies, setMyMovies] = useState([]);
  useEffect(() => {
    const m_user = JSON.parse(localStorage.getItem("user") || "");
    setUser(m_user);
    let mail = m_user.email;

    axios.get(`http://localhost:3000/my-movies/${mail}`).then((res) => {
      setMyMovies(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="Greeting">Hello, {user?.name}</h1>

      <div className="row">
        <MovieRow
          children={undefined}
          heading={"My Movies"}
          collection={myMovies}
        ></MovieRow>
      </div>

      <a
        className="logout-btn"
        onClick={() => {
          // localStorage.removeItem("user");
          // localStorage.removeItem("LoggedIn");
          localStorage.setItem("loggedIn", "false");
          navigate("/login");
        }}
      >
        Log Out
      </a>
    </div>
  );
};

export default ProfilePage;
