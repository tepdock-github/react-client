import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Exhibition = () => {
  const { id } = useParams();
  const [exhibition, setExhibition] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getExhibition = async () => {
      setLoading(true);
      const response = await fetch(
        `https://localhost:5001/api/exhibitions/${id}`
      );
      setExhibition(await response.json());
      setLoading(false);
    };
    getExhibition();
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

  const ShowExhibition = () => {
    return (
      <div className="d-flex justify-content-center mt-5 pt-5">
        <div className="col-md-6">
          <img
            src="https://res.cloudinary.com/dkt2qwk4f/image/upload/v1671101501/ticket_1_xhbg2r.png"
            className="card-img-top"
            alt={exhibition.name}
            // height="250px"
            // width="60px"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-6 fw-bold">{exhibition.name}</h1>
          <p className="lead fw-bolder">{exhibition.description}</p>
          <br />
          <br />
          <NavLink
            to={`/exhibitions/${exhibition.id}/tours`}
            className="btn btn-outline-dark"
          >
            Search Tours to Get
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowExhibition />}</div>
      </div>
    </div>
  );
};

export default Exhibition;
