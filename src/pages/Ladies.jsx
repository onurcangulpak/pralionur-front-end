import React, { useEffect, useState } from "react";
import "./Ladies.css";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

const Ladies = () => {
  const [ladies, setLadies] = useState(null);

  useEffect(() => {
    async function getLadies() {
      try {
        const response = await fetch(`${API_URL}/ladies`);
        const parsedResponse = await response.json();
        console.log("all Ladies are coming ", parsedResponse);
        setLadies(parsedResponse);
      } catch (err) {
        console.log("error", err);
      }
    }
    getLadies();
  }, []);

  if (!ladies) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
      
        <div className="container1">
          {ladies.map((product) => (
            <div className="oneProductContainer" key={product.id}>
              <h3>{product.name}</h3>
              <Link to={"/ladies/" + product.id}>
                <img src={product.image} alt="" />
              </Link>
              {/* <p>Price: {product.price}$</p> */}
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Ladies;
