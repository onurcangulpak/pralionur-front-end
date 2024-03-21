import React, { useEffect, useState } from "react";
import "./Ladies.css";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

export const Men = () => {
  const [Men, setMen] = useState(null);

  useEffect(() => {
    async function getMen() {
      try {
        const response = await fetch(
          `${API_URL}/men`
          // "http://localhost:5001/men"
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
        <div>
          <NavBar />
        </div>

        <div className="container1">
          {Men.map((product) => (
            <div className="oneProductContainer" key={product.id}>
              <h3>{product.name}</h3>
              <Link to={"/men/" + product.id}>
                {<img src={product.image} alt="" />}
              </Link>
              {/* {product.images.length > 0 && (
                <img src={product.images[0]} alt="" />
              )} */}
              {/* <p>Price: {product.price}$</p> */}
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};
