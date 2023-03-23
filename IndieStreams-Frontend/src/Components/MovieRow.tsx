import React, { ReactNode } from "react";
import "./MovieRow.css";

interface Props {
  children: ReactNode;
  heading: string;
}

const MovieRow = ({ children, heading }: Props) => {
  return (
    <div className="Row">
      <h1 className="heading">{heading}</h1>
      <ul>{children}</ul>
    </div>
  );
};

export default MovieRow;
