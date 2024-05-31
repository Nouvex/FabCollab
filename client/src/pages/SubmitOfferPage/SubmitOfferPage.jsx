import React, { useState } from "react";
import "./SubmitOfferPage.css";

const SubmitOfferPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    link: "",
    standort: "",
    tags: ""
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du die Logik zum Einreichen des Formulars hinzufügen
    console.log(formData);
  };

  return (
    <div className="submit-offer-page">
      <h2>Angebot einreichen</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Beschreibung</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="link">Link</label>
          <input
            type="url"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="standort">Standort</label>
          <input
            type="text"
            id="standort"
            name="standort"
            value={formData.standort}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Bild hochladen</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {image && <img src={image} alt="Preview" className="image-preview" />}
        </div>
        <button type="submit" className="submit-button">Einreichen</button>
      </form>
    </div>
  );
};

export default SubmitOfferPage;
