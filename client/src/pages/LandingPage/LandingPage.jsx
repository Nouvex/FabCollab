import React from 'react';
import './LandingPage.css';

const tags = ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6", "Tag7", "Tag8", "Tag9", "Tag10"];
const results = [
  "Ergebnis 1", "Ergebnis 2", "Ergebnis 3", "Ergebnis 4", 
  "Ergebnis 5", "Ergebnis 6", "Ergebnis 7", "Ergebnis 8", 
  "Ergebnis 9", "Ergebnis 10"
];

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h2>Willkommen bei FabCollab</h2>
      <p>Ihre Gesundheit ist unsere Priorität. Entdecken Sie unsere Dienste und erfahren Sie, wie wir Ihnen helfen können, ein gesünderes Leben zu führen.</p>
      
      <div className="search-section">
        <input type="text" placeholder="Suche..." className="search-input" />
        <button className="search-button">Suche</button>
      </div>

      <div className="tags-section">
        {tags.map((tag, index) => (
          <button key={index} className="tag-button">{tag}</button>
        ))}
      </div>

      <div className="content-section">
        <div className="results-section">
          {results.map((result, index) => (
            <div key={index} className="result-item">{result}</div>
          ))}
        </div>
        
        <div className="info-section">
          <h3>Informationen</h3>
          <p>Hotline: 123-456-789</p>
          <p>Email: info@fabcollab.com</p>
          <p>Adresse: Beispielstraße 1, 12345 Musterstadt</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;