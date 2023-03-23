import React, { ReactNode } from "react";
import "./MovieCard.css";

interface Props {
  children: ReactNode;
  poster: string;
}

const MovieCard = ({ children, poster }: Props) => {
  return (
    <div className="Card" style={{ backgroundImage: `url(${poster})` }}></div>
  );
};

export default MovieCard;
