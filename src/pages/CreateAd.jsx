import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAd.css";
import NavBar from "../components/Navbar/NavBar";

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
      const response = await fetch("http://localhost:5001/new", {
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
      <div>
        <NavBar />
      </div>
      <form onSubmit={handleCreateAd}>
        <div className="formContainer">
          <label>
            Title:
            <input
              name="Title"
              type="text"
              placeholder="title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </label>
          <label>
            Category:
            <select
              name="category"
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            >
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="children">Children</option>
            </select>
          </label>
          <label>
            Condition:
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
          </label>
          <label>
            Description:
            <input
              name="Description"
              type="text"
              placeholder="description"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </label>
          <label>
            Price:
            <input
              name="Price"
              type="text"
              placeholder="price"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />{" "}
            EUR
          </label>
          <label>
            Photo Url:
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(event) => {
                setImageUrl(event.target.value);
              }}
            />
          </label>
          <label>
            Email:
            <input
              name="Email"
              type="email"
              placeholder="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </label>
          <label>
            Phone Number:
            <input
              name="Phone"
              type="text"
              placeholder="phone"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </label>
          <label>
            Post Code:
            <input
              name="PostCode"
              type="text"
              placeholder="post code"
              value={postCode}
              onChange={(event) => {
                setPostCode(event.target.value);
              }}
            />
          </label>
          <label>
            Street, No. :
            <input
              name="Street"
              type="text"
              placeholder="street"
              value={street}
              onChange={(event) => {
                setStreet(event.target.value);
              }}
            />
          </label>
          <button type="submit">Place an ad</button>
        </div>
      </form>
    </div>
  );
};
