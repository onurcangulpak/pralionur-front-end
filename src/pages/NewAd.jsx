import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./DetailWomanProduct.css";
import NavBar from "../components/Navbar/NavBar";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";
const NewAd = () => {
  const [newAd, setNewAd] = useState(null);
  const [showText, setShowText] = useState(false);

  const navigate = useNavigate();
  // ********************** get the Id of the product ***********************
  const { productId } = useParams();
  console.log("here is the productId", productId);
  // ********************** get the product by id with axios ***********************
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios(`${API_URL}/new/${productId}`);
        console.log("here is details of new product", response.data);
        setNewAd(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [productId]);
  // ***************** show and hide the address ****************
  const toggleText = () => {
    setShowText(!showText);
  };
  // ***************** Delete the New Ads ***********************
  const handleDelete = async () => {
    console.log("id of ad to delete", productId);
    try {
      const response = await fetch(
        `http://localhost:5001/new/${productId}`,

        {
          method: "DELETE",
        }
      );
      const parsed = await response.json();
      console.log("You deleted something successfully!", parsed);
      navigate("/newads");
    } catch (err) {
      console.log(err);
    }
  };

  if (!newAd) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="detail-container">
        <div>
          <img src={newAd.imageUrl} alt="" />
        </div>
        <div>
          <div>
            <h2>{newAd.title}</h2>
            <h3>{newAd.category}</h3>
            <h3>{newAd.condition}</h3>
            <h3>{newAd.description}</h3>
            <h3>{newAd.price}</h3>
            <button onClick={toggleText}>Connection ways</button>
            {showText && <p>Email: {newAd.email}</p>}
            {showText && <p>Phone Number: {newAd.phone}</p>}
            {showText && <p>Address: {newAd.street}</p>}
            {showText && <p>{newAd.postCode}</p>}
          </div>
          <div>
            <Link to={"/editad/" + productId}>
              <button>Edit the Ad</button>
            </Link>
            <button
              onClick={() => {
                handleDelete();
                console.log("delete button clicked");
              }}
            >
              Delete the Ad
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewAd;
