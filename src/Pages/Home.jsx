import React from "react";
import Paitings from "../components/Paintings";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0">
        <img
          src="/assets/the-starry-night-over-the-rhone.jpg"
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div
          className="card-img-overlay d-flex flex-column
        justify-content-center"
        >
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              7x Andries Bonger and His Collection
            </h5>
            <p className="card-text lead fs-2">
              All famouse paitings in one collection!
            </p>
          </div>
        </div>
      </div>
      <Paitings/>
    </div>
  );
};

export default Home;
