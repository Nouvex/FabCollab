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
          <h2>Praxisname</h2>
          <p><strong>Adresse:</strong> Musterstraße 1, 12345 Musterstadt</p>
          <p><strong>Telefon:</strong> 01234 567890</p>
          <p><strong>Website:</strong> <a href="https://www.praxiswebsite.de" target="_blank" rel="noopener noreferrer">www.praxiswebsite.de</a></p>
        </div>
      </div>
      <div className="description">
        <p>Hier können Sie einen kurzen Text über die Praxis oder den Therapeuten einfügen. Dieser Bereich bietet Platz für zusätzliche Informationen oder eine kurze Beschreibung der Dienstleistungen.</p>
      </div>
    </div>
    </div>
  );
};

export default Forum;