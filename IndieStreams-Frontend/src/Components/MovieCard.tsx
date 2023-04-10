import React, { ReactNode } from "react";
import movieProps from "../MovieProps";
import "./MovieCard.css";

const MovieCard = (
  { title, description, movieUrl, children, posterUrl }: movieProps,
  props: { click: React.MouseEventHandler<HTMLDivElement> | undefined }
) => {
  return (
    <div className="Card" onClick={props.click}>
      <div className="info">
        <h3 className="Card-Title">{title}</h3>
        <p className="Desc">{description}</p>
        {children}
      </div>
      <img src={posterUrl} />
    </div>
  );
};

export default MovieCard;
