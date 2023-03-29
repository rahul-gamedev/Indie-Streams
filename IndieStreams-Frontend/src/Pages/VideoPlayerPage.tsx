import React from "react";
import NavBar from "../Components/NavBar";

import movieProps from "../MovieProps";

const VideoPlayerPage = ({
  title,
  description,
  movieUrl,
  posterUrl,
}: movieProps) => {
  return (
    <>
      <NavBar></NavBar>
      <video height={200} controls src={movieUrl} />
    </>
  );
};

export default VideoPlayerPage;
