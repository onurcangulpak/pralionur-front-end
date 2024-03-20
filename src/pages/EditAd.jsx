import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CreateAd.css";
import axios from "axios";

const EditAd = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [editAd, setEditAd] = useState(null);

  
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
  

  // ******************* get the information of the ad *****************
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios(`http://localhost:5001/new/${productId}`);
        console.log("here is details of edited product", response.data);
        setEditAd(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [productId]);

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
    } catch {
      (err) => {
        console.log(err);
      };
    }
// ******************* delete the old ad *******************
try {
    const response = await fetch(
      `http://localhost:5001/new/${productId}`,
      {
        method: "DELETE",
      }
    );
    const parsed = await response.json();
    console.log("You deleted the old ad successfully!", parsed);
    navigate("/newads");
  } catch (err) {
    console.log(err);
  }

  };

  if (!editAd) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <form onSubmit={handleCreateAd}>
        <h2>Ad Details</h2>
        <div className="formContainer">
          <label>
            Title: 
            <input
              name="Title"
              type="text"
              placeholder={editAd.title}
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
            <select name="condition"   onChange={(event) => {
                setCondition(event.target.value);
              }}>
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
              placeholder={editAd.description}
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
              placeholder={editAd.price}
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            /> EUR
          </label>
            <label>
                Image Url: 
                <input
                type="text"
                name="imageUrl"
                placeholder={editAd.imageUrl}
                value={imageUrl}
                onChange={(event)=>{
                  setImageUrl(event.target.value)
                }}
                />
                </label>
          <label>
            Email: 
            <input
              name="Email"
              type="email"
              placeholder={editAd.email}
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
              type="number"
              placeholder={editAd.phone}
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
              type="number"
              placeholder={editAd.postCode}
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
              placeholder={editAd.street}
              value={street}
              onChange={(event) => {
                setStreet(event.target.value);
              }}
            />
          </label>
          <button type="submit">Edit your ad</button>
        </div>
      </form>
    </div>
  );
};

export default EditAd;
