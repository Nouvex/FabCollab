import React, { useEffect, useState } from "react";
import "./LandingPage.css";

const backend = "http://localhost:3000";

const LandingPage = () => {
  const [visibleResults, setVisibleResults] = useState(3);
  const [tags, setTags] = useState([]);
  const [solutions, setSolutions] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const showMoreResults = () => {
    setVisibleResults((prev) => prev + 3);
  };

  const fetchSolutions = (tags) => {
    const url = tags.length > 0 
      ? `${backend}/solutionTag/${tags.map(tag => tag.name).join(",")}` 
      : `${backend}/solution`;

    fetch(url)
      .then((response) => response.json())
      .then((solutions) => {
        setSolutions(solutions);
      })
      .catch((error) => {
        console.error("Fehler beim Abrufen der Solutions:", error);
      });
  };

  const toggleTag = (tag) => {
    const isSelected = selectedTags.includes(tag);
    const updatedTags = isSelected
      ? selectedTags.filter((selectedTag) => selectedTag !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updatedTags);

    fetchSolutions(updatedTags); // **Update Solutions based on the selected tags**
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

    fetchSolutions([]); // **Initial fetch for all solutions**
  }, []);

  const filteredSolutions = solutions.filter((solution) => {
    if (selectedTags.length === 0) return true;
    return selectedTags.every((selectedTag) =>
      solution.tags.includes(selectedTag.name)
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
              selectedTags.includes(tag) ? "tag-button selected" : "tag-button"
            }
            onClick={() => toggleTag(tag)}
          >
            {tag.name}
          </button>
        ))}
      </div>

      <div className="content-section">
        <div className="results-section">
          {filteredSolutions.length > 0 ? ( // **Check if there are any filtered solutions**
            filteredSolutions.slice(0, visibleResults).map((solution, index) => (
              <div key={index} className="result-item">
                <div className="result-image">
                  <img src="https://via.placeholder.com/150" alt="Beispiel" />
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
            <p className="no-results-message">Keine Ergebnisse gefunden für die ausgewählten Tags.</p> // **Display message if no results found**
          )}
          {visibleResults < filteredSolutions.length && (
            <button className="show-more-button" onClick={showMoreResults}>
              Mehr anzeigen
            </button>
          )}
        </div>

        <div className="info-section">
          <h3>Notfall Hilfe</h3>
          <p>Hotline: 123-456-789</p>
          <p>Email: info@fabcollab.com</p>
          <p>Adresse: Beispielstraße 1, 12345 Musterstadt</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
