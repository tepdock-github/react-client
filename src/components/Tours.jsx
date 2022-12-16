import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Tours = () => {
  var exhibitionId = window.location.href.split('/')[4];
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getTours = async () => {
      setLoading(true);
      const response = await fetch("https://localhost:5001/api/exhibitions/" + exhibitionId
      + "/tours");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getTours();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowTours = () => {
    return (
      <>
        {filter.map((tours) => {
          return (
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key={tours.id}>
                <div className="card-body">
                  <h3 className="card-title mb-0 lead fw-bold">
                    {tours.description}
                  </h3>
                  <h5 className="card-title">Места: {tours.tourPlaces}</h5>
                  {/* <NavLink
                      to={`/exhibitions/`}
                      className="btn btn-outline-dark"
                    >
                      Learn More
                    </NavLink> */}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-6">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Tours</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowTours />}
        </div>
      </div>
    </div>
  );
};

export default Tours;
