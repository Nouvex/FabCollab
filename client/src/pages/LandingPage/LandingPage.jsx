import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importiere useNavigate
import "./LandingPage.css";

const backend = "http://localhost:3000";

const LandingPage = ({ isLoggedIn }) => {
  const [visibleResults, setVisibleResults] = useState(3);
  const [tags, setTags] = useState([]);
  const [solutions, setSolutions] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate(); // Initialisiere useNavigate

  const showMoreResults = () => {
    setVisibleResults((prev) => prev + 3);
  };

  const fetchSolutions = (tags) => {
    if (tags.length > 0) {
      fetch(`${backend}/solutions?tags=${tags.join(',')}`)
        .then((response) => response.json())
        .then((solutions) => {
          setSolutions(solutions);
        })
        .catch((error) => {
          console.error("Fehler beim Abrufen der Solutions:", error);
        });
    } else {
      fetch(`${backend}/solution`)
        .then((response) => response.json())
        .then((solutions) => {
          setSolutions(solutions);
        })
        .catch((error) => {
          console.error("Fehler beim Abrufen der Solutions:", error);
        });
    }
  };

  const toggleTag = (tag) => {
    const isSelected = selectedTags.includes(tag.name);
    const updatedTags = isSelected
      ? selectedTags.filter((selectedTag) => selectedTag !== tag.name)
      : [...selectedTags, tag.name];
    setSelectedTags(updatedTags);

    fetchSolutions(updatedTags);
  };

  useEffect(() => {
    fetch(`${backend}/tag`)
      .then((response) => response.json())
      .then((tags) => {
        setTags(tags);
      })
      .catch((error) => {
        console.error("Fehler beim Abrufen der Tags:", error);
      });

    fetchSolutions([]);
  }, []);

  const handleResultClick = (solution) => {
    navigate('/sub', { state: { solution } }); // Navigiere zur SubPage und übergebe die Daten
  };

  const handleOfferClick = () => {
    navigate('/submit-offer'); // Navigiere zur SubmitOfferPage
  };

  const handleForumClick = () => {
    navigate('/forum'); // Navigiere zur ForumPage
  };

  const filteredSolutions = solutions.filter((solution) => {
    if (selectedTags.length === 0) return true;
    return selectedTags.every((selectedTag) =>
      solution.tags.includes(selectedTag)
    );
  });

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


      <div className="tags-section">
        {tags.map((tag, index) => (
          <button
            key={index}
            className={
              selectedTags.includes(tag.name) ? "tag-button selected" : "tag-button"
            }
            onClick={() => toggleTag(tag)}
          >
            {tag.name}
          </button>
        ))}
      </div>

      <div className="content-section">


        <div className="results-section">
          {isLoggedIn && (
            <div className="offer-submit-section">
              <button className="submit-offer-button" onClick={handleOfferClick}>Angebot einreichen</button>
            </div>
          )}
          {filteredSolutions.length > 0 ? (
            filteredSolutions.slice(0, visibleResults).map((solution, index) => (
              <div
                key={index}
                className="result-item"
                onClick={() => handleResultClick(solution)}
              >
                <div className="result-image">
                  {solution.visual ? (
                     <img src={`${backend}/${solution.visual}`} alt={solution.name} />
                  ) : (
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Beispiel"
                    />
                  )}
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
          {visibleResults < filteredSolutions.length && (
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
        <button className="tag-button" onClick={handleForumClick}>Zum Forum</button>
      </div>
    </div>
  );
};

export default LandingPage;
