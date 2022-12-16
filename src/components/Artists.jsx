import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Artists = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getPaitings = async () => {
      setLoading(true);
      const response = await fetch("https://localhost:5001/api/artists");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getPaitings();
  }, []);

  const Loading = () => {
    return (
        <>
        <div className="col-md-3">
            <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
            <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
            <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
            <Skeleton height={350}/>
            </div>
        </>
    );
  };

  const ShowArtists = () => {
    return (
      <>
        {filter.map((artist) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={artist.id}>
                  <img
                    src="/assets/the-starry-night-over-the-rhone.jpg"
                    className="card-img-top"
                    alt={artist.name}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0 lead fw-bold">{artist.name.substring(0, 12)}</h5>
                    <NavLink to={`/artists/${artist.id}`} className="btn btn-outline-dark">
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
            <h1 className="display-6 fw-bolder text-center">Artists</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowArtists />}
        </div>
      </div>
    </div>
  );
};

export default Artists;
