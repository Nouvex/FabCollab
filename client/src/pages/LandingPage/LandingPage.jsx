import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Beispiel from "../../assets/BVC_image.png";

const backend = "http://localhost:3000";

const LandingPage = ({ isLoggedIn }) => {
  const [visibleResults, setVisibleResults] = useState(3);
  const [tags, setTags] = useState([]);
  const [solutions, setSolutions] = useState([]);
  const [displayedSolutions, setDisplayedSolutions] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchTagsAndSolutions();
  }, []);

  const fetchTagsAndSolutions = () => {
    fetch(`${backend}/tag`)
      .then(response => response.json())
      .then(setTags)
      .catch(error => console.error("Fehler beim Abrufen der Tags:", error));

    fetch(`${backend}/solution`)
      .then(response => response.json())
      .then(data => {
        setSolutions(data);
        setDisplayedSolutions(data);
        updateLocations(data);
      })
      .catch(error => console.error("Fehler beim Abrufen der Solutions:", error));
  };

  const updateLocations = (solutions) => {
    const newLocations = Array.from(new Set(solutions.map(s => s.standort)));
    setLocations(newLocations);
  };

  const filterSolutions = (solutions, tags, location) => {
    return solutions.filter(solution =>
      (tags.length === 0 || tags.every(tag => solution.tags.includes(tag))) &&
      (location === '' || solution.standort === location)
    );
  };

  const handleTagToggle = (tag) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updatedTags);
    const filteredSolutions = filterSolutions(solutions, updatedTags, selectedLocation);
    setDisplayedSolutions(filteredSolutions);
  };

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setSelectedLocation(newLocation);
    const filteredSolutions = filterSolutions(solutions, selectedTags, newLocation);
    setDisplayedSolutions(filteredSolutions);
  };

  const showMoreResults = () => {
    setVisibleResults((prev) => prev + 3);
  };

  return (
    <div className="landing-page">
      <h2>Willkommen bei FabCollab</h2>
      <p>
        Ihre Gesundheit ist unsere Priorität. Entdecken Sie unsere Dienste und
        erfahren Sie, wie wir Ihnen helfen können, ein gesünderes Leben zu
        führen.
      </p>

      <div className="search-section">
        <input type="text" placeholder="Suche..." className="search-input" />
        <button className="search-button">Suche</button>
      </div>
      <div className="filter-section">
        <div className="tags-section">
          {tags.map((tag, index) => (
            <button
              key={index}
              className={
                selectedTags.includes(tag.name) ? "tag-button selected" : "tag-button"
              }
              onClick={() => handleTagToggle(tag.name)}
            >
              {tag.name}
            </button>
          ))}
        </div>

        <div className="location-section">
          <select
            onChange={handleLocationChange}
            value={selectedLocation}
          >
            <option value="">Alle Standorte</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="content-section">
        <div className="results-section">
          {isLoggedIn && (
            <div className="offer-submit-section">
              <button className="submit-offer-button" onClick={() => navigate('/submit-offer')}>Angebot einreichen</button>
            </div>
          )}
          {displayedSolutions.length > 0 ? (
            displayedSolutions.slice(0, visibleResults).map((solution, index) => (
              <div
                key={index}
                className="result-item"
                onClick={() => navigate('/sub', { state: { solution } })}
              >
                <div className="result-image">
                  <img src={Beispiel}/>
                </div>
                <div className="result-content">
                  <h3>{solution.name}</h3>
                  <div className="result-details">
                    <p>Beschreibung: {solution.short_description}</p>
                    <p>Link: <a href={solution.link}>{solution.link}</a></p>
                    <p>Standort: {solution.standort}</p>
                  </div>
                  <div className="result-tags">
                    {solution.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="result-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results-message">Keine Ergebnisse gefunden für die ausgewählten Tags.</p>
          )}
          {visibleResults < displayedSolutions.length && (
            <button className="show-more-button" onClick={showMoreResults}>
              Mehr anzeigen
            </button>
          )}
        </div>

        <div className="info-section">
          <h2>Notfall Hilfe</h2>
          <p>Hotline: 0800-123-4567</p>
          <p>Email: info@fabcollab.com</p>
          <p>Adresse: Beispielstraße 1, 12345 Musterstadt</p>
          <h2>Suizid Hotline</h2>
          <p>Hotline: 0800-123-4567</p>
          <p>Email: info@fabcollab.com</p>
          <p>Adresse: Beispielstraße 1, 12345 Musterstadt</p>
          <h2>Notdienst</h2>
          <p>Hotline: 0800-123-4567</p>
          <p>Email: info@fabcollab.com</p>
          <p>Adresse: Beispielstraße 1, 12345 Musterstadt</p>
        </div>
      </div>

      <div className="top-comments-section">
        <h2>Top Beiträge aus dem Forum</h2>
        <div className="comments">
          <div className="comment">
            <p>"Dieser Therapeut hat mir sehr geholfen. Sehr empfehlenswert!" - User A</p>
          </div>
          <div className="comment">
            <p>"Tolle Praxis, freundliches Personal und kompetente Beratung." - User B</p>
          </div>
          <div className="comment">
            <p>"Sehr zufrieden mit der Behandlung, fühle mich hier gut aufgehoben." - User C</p>
          </div>
        </div>
        <button className="tag-button" onClick={() => navigate('/forum')}>Zum Forum</button>
      </div>
    </div>
  );
};

export default LandingPage;
