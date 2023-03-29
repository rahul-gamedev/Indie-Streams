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

function HomePage() {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("loggedIn") == "true";

  useEffect(() => {
    loggedIn == true ? navigate("/") : navigate("/login");
  }, [loggedIn]);

  const [popularMovies, setPopularMovies] = useState([]);
  const [bannerMovie, setBannerMovie] = useState<movie>();

  useEffect(() => {
    axios.get("http://localhost:3000/popular").then((res) => {
      setPopularMovies(res.data);
    });
    setBannerMovie(popularMovies[1]);
  }, []);

  useEffect(() => {
    setBannerMovie(popularMovies[1]);
  }, [popularMovies]);

  return (
    <div className="home">
      <NavBar></NavBar>
      {bannerMovie && (
        <Banner
          title={bannerMovie.title}
          description={bannerMovie.description}
          movieUrl={bannerMovie.video}
          posterUrl={bannerMovie.poster}
          children={undefined}
        ></Banner>
      )}

      <MovieRow heading={"Popular"}>
        {popularMovies.map(
          ({ title, description, id, video, poster }: movie) => (
            <MovieCard
              key={id}
              title={title}
              description={description}
              movieUrl={video}
              posterUrl={poster}
              children={undefined}
            ></MovieCard>
          )
        )}
      </MovieRow>
    </div>
  );
}

export default HomePage;
