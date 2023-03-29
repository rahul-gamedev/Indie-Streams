import React, { ReactNode } from "react";
import movieProps from "../MovieProps";
import "./MovieCard.css";

const MovieCard = ({
  title,
  description,
  movieUrl,
  children,
  posterUrl,
}: movieProps) => {
  return (
    <div className="Card">
      <img src={posterUrl} />
      <div className="info">
        <h3 className="Card-Title">{title}</h3>
        <p className="Desc">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
