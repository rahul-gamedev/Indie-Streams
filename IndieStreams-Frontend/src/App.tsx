import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import MovieCard from "./Components/MovieCard";
import MovieRow from "./Components/MovieRow";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Banner image={"https://source.unsplash.com/random/720×1280/?Movies"}>
        <div className="content">
          <h1 className="Title">Title</h1>
          <p className="Description">This is the description....</p>
        </div>
      </Banner>

      <MovieRow heading={"Popular"}>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
      </MovieRow>

      <MovieRow heading={"Newly Released"}>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
        <MovieCard
          poster={"https://source.unsplash.com/random/1280×720/?Movies"}
        >
          <></>
        </MovieCard>
      </MovieRow>
    </div>
  );
}

export default App;
