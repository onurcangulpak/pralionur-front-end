import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { SlideShow } from "../components/SlideShow/SlideShow";
import "./DetailWomanProduct.css";
import NavBar from "../components/Navbar/NavBar";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

export const DetailMenProduct = () => {
  const [oneManProduct, setOneManProduct] = useState(null);

  const navigate = useNavigate();
  // ********************** get the Id of the product ***********************
  const { productId } = useParams();
  console.log("here is the productId", productId);
  // ********************** get the product by id with axios ***********************
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios(`${API_URL}/men/${productId}`);
        console.log("here is details of one man product", response.data);
        setOneManProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [productId]);

  if (!oneManProduct) {
    return <div>Loading...</div>;
  }

  return (
    <>
     
      <div className="detail-container">
        {/* <img src={oneManProduct.image} alt="" /> */}
        <SlideShow oneProduct={oneManProduct} />
      </div>
    </>
  );
};
