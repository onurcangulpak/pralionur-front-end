import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAd.css";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

export const CreateAd = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postCode, setPostCode] = useState("");
  const [street, setStreet] = useState("");

  const handleCreateAd = async (event) => {
    event.preventDefault();
    const newAd = {
      title,
      category,
      condition,
      description,
      price,
      imageUrl,
      email,
      phone,
      postCode,
      street,
    };

    try {
      // const response = await fetch("http://localhost:5001/new", {
      const response = await fetch(`${API_URL}/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAd),
      });
      const parsed = await response.json();
      console.log("Newww Ad:", parsed);
      navigate("/newads");
    } catch {
      (err) => {
        console.log(err);
      };
    }
  };

  return (
    <div>
      <form onSubmit={handleCreateAd}>
        <div className="formContainer">
          <div className="row">
            <div className="col-25">
              {" "}
              <label>Title:</label>
            </div>
            <div className="col-75">
              {" "}
              <input
                name="Title"
                type="text"
                placeholder="title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              {" "}
              <label htmlFor="category">Category:</label>
            </div>
            <div className="col-75">
              {" "}
              <select
                name="category"
                id="category"
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
              >
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="children">Children</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              {" "}
              <label>Condition:</label>
            </div>
            <div className="col-75">
              {" "}
              <select
                name="condition"
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              >
                <option value="new">New</option>
                <option value="likeNew">Like New</option>
                <option value="used">Used</option>
                <option value="goodCondition">Good Condition</option>
                <option value="fairCondition">Fair Condition</option>
                <option value="poor Condition">Poor Condition</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              {" "}
              <label>Description:</label>
            </div>
            <div className="col-75">
              {" "}
              <input
                name="Description"
                type="text"
                placeholder="description"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              {" "}
              <label>Price:</label>
            </div>
            <div className="col-75">
              <input
                id="price"
                name="Price"
                type="text"
                placeholder="price"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              {" "}
              <label>Photo Url:</label>
            </div>
            <div className="col-75">
              {" "}
              <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                value={imageUrl}
                onChange={(event) => {
                  setImageUrl(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              {" "}
              <label>Email: </label>
            </div>
            <div className="col-75">
              {" "}
              <input
                name="Email"
                type="email"
                placeholder="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              {" "}
              <label>Phone Number:</label>
            </div>
            <div className="col-75">
              {" "}
              <input
                name="Phone"
                type="text"
                placeholder="phone"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              {" "}
              <label>Post Code: </label>
            </div>
            <div className="col-75">
              {" "}
              <input
                name="PostCode"
                type="text"
                placeholder="post code"
                value={postCode}
                onChange={(event) => {
                  setPostCode(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              {" "}
              <label>Street, No. :</label>
            </div>
            <div className="col-75">
              {" "}
              <input
                name="Street"
                type="text"
                placeholder="street"
                value={street}
                onChange={(event) => {
                  setStreet(event.target.value);
                }}
              />
            </div>
          </div>

          <button type="submit">Place an ad</button>
        </div>
      </form>

      <div>
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
};
