import React, { useEffect, useState } from "react";
import "./Ladies.css";
import { Link } from "react-router-dom";

export const Men = () => {
  const [Men, setMen] = useState(null);

  useEffect(() => {
    async function getMen() {
      try {
        const response = await fetch(
          //   "https://api.escuelajs.co/api/v1/products"
          "http://localhost:5001/men"
        );
        const parsedResponse = await response.json();
        console.log("all Men are coming ", parsedResponse);
        setMen(parsedResponse);
      } catch (err) {
        console.log("error", err);
      }
    }
    getMen();
  }, []);

  if (!Men) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h2>All Men Models</h2>
        <div className="container1">
          {Men.map((product) => (
            <div className="oneProductContainer" key={product.id}>
              <h3>{product.title}</h3>
              <Link to={"/men/" + product.id}>
                {<img src={product.image} alt="" />}
              </Link>
              {/* {product.images.length > 0 && (
                <img src={product.images[0]} alt="" />
              )} */}
              <p>Price: {product.price}$</p>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};
