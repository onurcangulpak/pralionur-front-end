import React, { useState } from "react";
import "./CreateAd.css";

export const CreateAd = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [pictures, setPictures] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postCode, setPostCode] = useState("");
  const [street, setStreet] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleCreateAd = (event) => {
    event.preventDefault();
    const newAd = {
      title,
      category,
      condition,
      description,
      price,
      pictures,
      email,
      phone,
      postCode,
      street,
    };
    console.log("new Add", newAd);
  };

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const renderPreview = () => {
    return selectedFiles.map((file, index) => (
      <img
        key={index}
        src={URL.createObjectURL(file)}
        alt={`Preview ${index}`}
        style={{ maxWidth: "200px", marginRight: "10px" }}
      />
    ));
  };

  return (
    <div>
      <form onSubmit={handleCreateAd}>
        <h2>Ad Details</h2>
        <div className="formContainer">
          <label>
            Title
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
            Category
            <input
              name="category"
              type="text"
              placeholder="category"
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            />
          </label>
          <label>
            Condition
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
            Description
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
            Price
            <input
              name="Price"
              type="number"
              placeholder="price"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </label>
          <label>
            Pictures
            <input
              name="Pictures"
              type="file"
              placeholder="pictures"
              accept="image/*"
              value={pictures}
              multiple
              onChange={handleFileSelect}
            />
          </label>
          <label>
            Email
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
            Phone Number
            <input
              name="Phone"
              type="number"
              placeholder="phone"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </label>
          <label>
            Post Code
            <input
              name="PostCode"
              type="number"
              placeholder="post code"
              value={postCode}
              onChange={(event) => {
                setPostCode(event.target.value);
              }}
            />
          </label>
          <label>
            Street, No.
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
          <div id="previewContainer">
            {selectedFiles.length > 0 && renderPreview()}
          </div>
        </div>
      </form>
    </div>
  );
};
