import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Paiting = () => {
  const { id, artistId } = useParams();
  const [paiting, setPaiting] = useState([]);
  const [artist, setArtist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPaiting = async () => {
      setLoading(true);
      const response = await fetch(
        `https://localhost:5001/api/paintings/${id}`
      );
      setPaiting(await response.json());
      setLoading(false);
    };
    getPaiting();
  }, []);

  useEffect(() => {
    const getArtist = async () => {
      setLoading(true);
      const artist = await fetch(
        `https://localhost:5001/api/artists/${artistId}`
      );
      setArtist(await artist.json());
      setLoading(false);
    };
    getArtist();
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

  const ShowPaiting = () => {
    return (
      <div className="d-flex justify-content-center mt-5 pt-5">
        <div className="col-md-6">
          <img
            src={paiting.picture}
            alt={paiting.name}
            height="450px"
            width="550px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{paiting.category}</h4>
          <h1 className="display-6 fw-bold">{paiting.name}</h1>
          <p className="lead">{paiting.year} {paiting.artistId}</p>
          <p className="lead fw-bolder">{paiting.description}</p>
          <NavLink to={`/artists/${paiting.artistId}`} className="btn btn-outline-dark ms-2">
            <i className="fa fa-user-plus me-1"></i> More about artist
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowPaiting />}</div>
      </div>
    </div>
  );
};

export default Paiting;
