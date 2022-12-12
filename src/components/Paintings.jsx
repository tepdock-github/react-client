import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const Paitings = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getPaitings = async () => {
      setLoading(true);
      const response = await fetch("https://localhost:5001/api/paintings");
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

  const filterPainting = (ctgr) =>{
    const updatedList = data.filter((x)=>x.category === ctgr);
    setFilter(updatedList);
  }

  const ShowPaitings = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2"
          onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2"
          onClick={()=>filterPainting("Abstract")}>Abstract</button>
          <button className="btn btn-outline-dark me-2"
          onClick={()=>filterPainting("Modern")}>Modern</button>
          <button className="btn btn-outline-dark me-2"
          onClick={()=>filterPainting("Expresionism")}>Expresionism</button>
        </div>
        {filter.map((paiting) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={paiting.id}>
                  <img
                    src={paiting.picture}
                    className="card-img-top"
                    alt={paiting.name}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0 lead fw-bold">{paiting.name.substring(0, 12)}</h5>
                    <p className="card-text">{paiting.description}</p>
                    <div className="card-text lead fw-bold">
                      {paiting.year} {paiting.category}
                    </div>
                    <a href="#" className="btn btn-outline-dark">
                      Learn More
                    </a>
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
            <h1 className="display-6 fw-bolder text-center">Paitings</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowPaitings />}
        </div>
      </div>
    </div>
  );
};

export default Paitings;
