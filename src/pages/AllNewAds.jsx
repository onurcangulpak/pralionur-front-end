import React, { useEffect, useState } from "react";
import "./Ladies.css";
import { Link } from "react-router-dom";

const AllNewAds = () => {
  const [allNew, setAllNew] = useState(null);

  useEffect(() => {
    async function getAllNew() {
      try {
        const response = await fetch(
          //   "https://api.escuelajs.co/api/v1/products"
          "http://localhost:5001/new"
        );
        const parsedResponse = await response.json();
        console.log("all new ads are coming ", parsedResponse);
        setAllNew(parsedResponse);
      } catch (err) {
        console.log("error", err);
      }
    }
    getAllNew();
  }, []);

  if (!allNew) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h2>All New Ads</h2>
        <div className="container1">
          {allNew.map((product) => (
            <div className="oneProductContainer" key={product.id}>
              <Link to={"/newads/" + product.id}>
                <h3>{product.title}</h3>
                {<img src={product.imageUrl} alt="" />}
                <p></p>
              </Link>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AllNewAds;
