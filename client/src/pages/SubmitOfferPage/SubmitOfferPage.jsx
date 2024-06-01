import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./SubmitOfferPage.css";

const SubmitOfferPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    short_description: "",
    link: "",
    standort: "",
    tags: ""
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // State für das Popup
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'description') {
      // Extract the first sentence from the description
      const firstSentence = value.split('.')[0];
      setFormData({
        ...formData,
        description: value,
        short_description: firstSentence.trim() // Trim any leading or trailing spaces
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('short_description', formData.short_description);
    data.append('link', formData.link);
    data.append('standort', formData.standort);
    data.append('tags', formData.tags.split(',').map(tag => tag.trim())); // Handle tags as array

    if (image) {
      data.append('image', image);
    } else {
      data.append('image', ''); // Append empty string if no image is uploaded
    }

    try {
      const response = await axios.post('http://localhost:3000/solution', data);
      setMessage(`${response.data.name} erfolgreich hinzugefügt`);
      setShowPopup(true); // Zeige das Popup an
    } catch (error) {
      console.error('Error adding solution:', error);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handlePopupClose = () => {
    setShowPopup(false); // Schließe das Popup
    navigate('/'); // Navigiere zur Startseite (/)
  };

  return (
    <div className="submit-offer-page">
      <h2>Angebot einreichen</h2>
      {message && <p className="success-message">{message}</p>}
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
          <label htmlFor="short_description">Kurzbeschreibung</label>
          <textarea
            id="short_description"
            name="short_description"
            value={formData.short_description}
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
          {image && <img src={URL.createObjectURL(image)} alt="Preview" className="image-preview" />}
        </div>
        <div className="form-buttons">
          <button type="submit" className="submit-button">Einreichen</button>
          <button type="button" className="cancel-button" onClick={handleCancel}>Abbrechen</button>
        </div>
      </form>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>Ihr Vorschlag wurde eingereicht und wird nun von einem Experten überprüft.</p>
            <button onClick={handlePopupClose}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitOfferPage;
