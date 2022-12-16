import React from "react";
import Exhibitions from "../components/Exhibitions";
import Paitings from "../components/Paintings";
import About from "../components/About";

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
      <div className="card text-bg-dark text-white border-0">
        
        <img
          src="https://res.cloudinary.com/dkt2qwk4f/image/upload/v1671106298/ivan-konstantinovich-aivazovsky-8219085_ejmivr.jpg"
          className="card-img"
          alt="Background"
          height="450px"
        />
        <div
          className="card-img-overlay d-flex flex-column
        justify-content-center"
        >
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              New Exhibitions In Our Museums
            </h5>
            <p className="card-text lead fs-2">
              Hurry to visit/ 
            </p>
          </div>
        </div>
      </div>
      <Exhibitions/>
      <br/>
      <br/>
      <About/>
    </div>
  );
};

export default Home;
