import { useState, useEffect } from "react";
import "./HomePage.css";
import Banner from "../Components/Banner";
import MovieCard from "../Components/MovieCard";
import MovieRow from "../Components/MovieRow";
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type movie = {
  id: string;
  title: string;
  description: string;
  video: string;
  poster: string;
};

type user = {
  id: number | undefined;
  name: string;
  email: string;
  password: string;
};

function HomePage() {
  const navigate = useNavigate();

  const loggedIn = localStorage.getItem("loggedIn") == "true";

  useEffect(() => {
    loggedIn == true ? navigate("/") : navigate("/login");
  }, [loggedIn]);

  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/popular").then((res) => {
      setPopularMovies(res.data);
    });
    setBannerMovie(popularMovies[1]);
  }, []);

  const [bannerMovie, setBannerMovie] = useState<movie>();
  useEffect(() => {
    setBannerMovie(popularMovies[1]);
  }, [popularMovies]);

  return (
    <div className="home">
      <NavBar></NavBar>
      {bannerMovie && (
        <Banner
          id={bannerMovie.id}
          title={bannerMovie.title}
          description={bannerMovie.description}
          movieUrl={bannerMovie.video}
          posterUrl={bannerMovie.poster}
          children={undefined}
        ></Banner>
      )}

      <MovieRow
        children={undefined}
        heading={"Popular"}
        collection={popularMovies}
      ></MovieRow>
    </div>
  );
}

export default HomePage;
