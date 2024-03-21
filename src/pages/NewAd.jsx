import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/Navbar/NavBar";
import "./NewAd.css"

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
        `${API_URL}/new/${productId}`,

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
    
      <div className="newAd-container">
        <div>
          <img src={newAd.imageUrl} alt="" />
        </div>
        <div>
          <div>
            <p>Title: <strong>{newAd.title}</strong></p>
            <p>Category: <strong>{newAd.category}</strong></p>
            <p>Product Condition: <strong>{newAd.condition}</strong></p>
            <p>Description: <strong>{newAd.description}</strong></p>
            <p>Price: <strong>{newAd.price} $</strong></p>
            <button onClick={toggleText}>Click here to see the Connection ways</button>
            {showText && <p>Email: <strong>{newAd.email}</strong></p>}
            {showText && <p>Phone Number: <strong>{newAd.phone}</strong></p>}
            {showText && <p>Address: <strong>{newAd.street}</strong></p>}
            {showText && <p>Post Code: <strong>{newAd.postCode}</strong></p>}
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
