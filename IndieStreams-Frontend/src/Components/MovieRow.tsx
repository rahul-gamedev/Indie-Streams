import React, { ReactNode } from "react";
import "./MovieRow.css";
import movieProps from "../MovieProps";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

interface Props {
  children: ReactNode;
  heading: string;
  collection: any;
}

type movie = {
  id: string;
  title: string;
  description: string;
  video: string;
  poster: string;
};

function MovieRow({ children, heading, collection }: Props) {
  const navigate = useNavigate();

  return (
    <div className="Row">
      <h1 className="heading">{heading}</h1>
      <ul>
        {collection.map(({ title, description, id, video, poster }: movie) => (
          <div
            onClick={() => {
              navigate(`/movie/${id}`);
            }}
            key={id}
          >
            <MovieCard
              title={title}
              description={description}
              movieUrl={video}
              posterUrl={poster}
              id={id}
              children={undefined}
            ></MovieCard>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default MovieRow;
