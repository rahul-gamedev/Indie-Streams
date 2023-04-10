import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import movieProps from "../MovieProps";
import "./VideoPlayerPage.css";

type movie = {
  id: string;
  title: string;
  description: string;
  video: string;
  poster: string;
};

const VideoPlayerPage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState<movie>();

  useEffect(() => {
    const load = async () => {
      await axios.get(`http://localhost:3000/movie/${id}`).then((res) => {
        setMovie(res.data[0]);
      });
    };
    load();
  }, []);

  return (
    <>
      <NavBar></NavBar>
      {movie && (
        <video
          className="video"
          controls
          src={movie.video}
          poster={movie.poster}
        />
      )}
      <div>
        <h1>{movie?.title}</h1>
        <p>{movie?.description}</p>
      </div>
    </>
  );
};

export default VideoPlayerPage;
