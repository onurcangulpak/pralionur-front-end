import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { SlideShow } from "../components/SlideShow/SlideShow";
import "./DetailWomanProduct.css";
import NavBar from "../components/Navbar/NavBar";
export const DetailWomanProduct = () => {
  const [oneWomanProduct, setOneWomanProduct] = useState(null);
  const navigate = useNavigate();
  // ********************** get the Id of the product ***********************
  const { productId } = useParams();
  console.log("here is the productId", productId);
  // ********************** get the product by id with axios ***********************
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios(
          `http://localhost:5001/ladies/${productId}`
        );
        console.log("here is details of one woman product", response.data);
        setOneWomanProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [productId]);
  if (!oneWomanProduct) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="detail-container">
        {/* <img src={oneWomanProduct.image} alt="" /> */}
        <SlideShow oneProduct={oneWomanProduct} />
      </div>
    </>
  );
};
