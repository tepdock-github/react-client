import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Exhibitions = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getExhibitions = async () => {
      setLoading(true);
      const response = await fetch("https://localhost:5001/api/exhibitions");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getExhibitions();
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

  const ShowExhibitions = () => {
    return (
      <>
        {filter.map((exhibition) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={exhibition.id}>
                  <img
                    src="https://res.cloudinary.com/dkt2qwk4f/image/upload/v1671101501/ticket_1_xhbg2r.png"
                    className="card-img-top"
                    alt={exhibition.name}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0 lead fw-bold">
                      {exhibition.name}
                    </h5>
                    <NavLink
                      to={`/exhibitions/${exhibition.id}`}
                      className="btn btn-outline-dark"
                    >
                      Learn More
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Exhibitions</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowExhibitions />}
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;
