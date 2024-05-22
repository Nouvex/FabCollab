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

  const toggleTag = (tag) => {
    const isSelected = selectedTags.includes(tag);
    const updatedTags = isSelected
      ? selectedTags.filter((selectedTag) => selectedTag !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updatedTags);

    fetch(`${backend}/solutionTag/${tag.name}`)
      .then((response) => response.json())
      .then((solutions) => {
        setSolutions(solutions);
      })
      .catch((error) => {
        console.error("Fehler beim Abrufen der Solutions für den Tag:", error);
      });
  };

  useEffect(() => {
    fetch(`${backend}/tag`) // Verwenden Sie Template-Literals, um die URL zu erstellen
      .then((response) => response.json())
      .then((tags) => {
        setTags(tags); // Speichern Sie die erhaltenen Tags im State
      })
      .catch((error) => {
        console.error("Fehler beim Abrufen der Tags:", error);
      });
  }, []);

  useEffect(() => {
    fetch(`${backend}/solution`) // Verwenden Sie Template-Literals, um die URL zu erstellen
      .then((response) => response.json())
      .then((solutions) => {
        setSolutions(solutions); // Speichern Sie die erhaltenen Tags im State
      })
      .catch((error) => {
        console.error("Fehler beim Abrufen der Solutions:", error);
      });
  }, []);

  const filteredSolutions = solutions.filter((solution) => {
    // If no tags are selected, show all solutions
    if (selectedTags.length === 0) return true;

    // Check if the solution has all selected tags
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
          {solutions.slice(0, visibleResults).map((solution, index) => (
            <div key={index} className="result-item">
              <div className="result-image">
                <img src="https://via.placeholder.com/80" alt="Beispiel" />
              </div>
              <div className="result-content">
                <h3>{solution.name}</h3>
                <p>Description: {solution.short_description}</p>
                <p>Link: {solution.link}</p>
                <p>Standort: {solution.standort}</p>
              </div>
            </div>
          ))}
          {visibleResults < solutions.length && (
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
