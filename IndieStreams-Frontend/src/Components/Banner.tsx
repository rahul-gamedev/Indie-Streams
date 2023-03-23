import React, { ReactNode } from "react";
import "./Banner.css";

interface Props {
  children: ReactNode;
  image: string;
}
const Banner = ({ image, children }: Props) => {
  return (
    <div
      className="Banner"
      style={{
        backgroundImage: `url(${"https://source.unsplash.com/random/720×1280/?Movies"})`,
      }}
    >
      {children}
    </div>
  );
};

export default Banner;
