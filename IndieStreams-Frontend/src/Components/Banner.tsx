import React, { ReactNode } from "react";
import movieProps from "../MovieProps";
import "./Banner.css";

const Banner = ({
  title,
  description,
  movieUrl,
  children,
  posterUrl,
}: movieProps) => {
  return (
    <div className="Banner">
      <img src={posterUrl} />

      <div className="content">
        <h1 className="Title">{title}</h1>
        <p className="Description">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default Banner;
