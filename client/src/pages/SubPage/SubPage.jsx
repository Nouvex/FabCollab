import React from 'react';
import './SubPage.css';
import therapeut from '../../assets/therapeut.jpg';

const Forum = () => {
  return (
    <div className="forum">
      <div className="therapist-ad">
      <div className="content">
        <div className="image-container">
          <img src={therapeut} alt="Therapist" />
        </div>
        <div className="info">
          <h2>Practice Mustermann for Therapy</h2>
          <p><strong>Description:</strong> Therapist for Mental Health Problems and Depression</p>
          <p><strong>Adress:</strong> Musterstraße 1, 12345 Musterstadt</p>
          <p><strong>Phone Number:</strong> 01234 567890</p>
          <p><strong>Website:</strong> <a href="https://www.praxiswebsite.de" target="_blank" rel="noopener noreferrer">www.praxiswebsite.de</a></p>
          <p><strong>Appointment booking:</strong> Online, per Call</p>
        </div>
      </div>
      <div className="description">
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
     </div>
    </div>
    </div>
  );
};

export default Forum;