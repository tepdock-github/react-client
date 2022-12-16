import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Artist = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getArtist = async () => {
      setLoading(true);
      const response = await fetch(`https://localhost:5001/api/artists/${id}`);
      setArtist(await response.json());
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

  const ShowArtist = () => {
    return (
      <div className="d-flex justify-content-center mt-5 pt-5">
          <div className="col-md-6">
          <img
            src="/assets/the-starry-night-over-the-rhone.jpg"
            alt={artist.name}
            height="450px"
            width="550px"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-6 fw-bold">{artist.name}</h1>
          <p className="lead">{artist.country}</p>
        </div>
      </div>
    );
  };

  return(
      <>
      <div className="container">
          <div className="row">{loading ? <Loading/>:<ShowArtist/>}</div>
          </div>
      </>
  );
};

export default Artist;
