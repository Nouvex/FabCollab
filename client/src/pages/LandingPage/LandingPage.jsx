import React, { useEffect, useState } from 'react';
import './LandingPage.css';


const backend='http://localhost:3000';






//const tags = ["Online", "Video", "Kurs", "Workshop", "Seminar", "Training", "Vortrag", "Webinar", "Event", "Meeting"];


// const results = [
//   { title: "Ergebnis 1", type: "Type 1", costs: "Kosten 1", language: "Sprache 1", duration: "Dauer 1" },
//   { title: "Ergebnis 2", type: "Type 2", costs: "Kosten 2", language: "Sprache 2", duration: "Dauer 2" },
//   { title: "Ergebnis 3", type: "Type 3", costs: "Kosten 3", language: "Sprache 3", duration: "Dauer 3" },
//   { title: "Ergebnis 4", type: "Type 4", costs: "Kosten 4", language: "Sprache 4", duration: "Dauer 4" },
//   { title: "Ergebnis 5", type: "Type 5", costs: "Kosten 5", language: "Sprache 5", duration: "Dauer 5" },
//   { title: "Ergebnis 6", type: "Type 6", costs: "Kosten 6", language: "Sprache 6", duration: "Dauer 6" },
//   { title: "Ergebnis 7", type: "Type 7", costs: "Kosten 7", language: "Sprache 7", duration: "Dauer 7" },
//   { title: "Ergebnis 8", type: "Type 8", costs: "Kosten 8", language: "Sprache 8", duration: "Dauer 8" },
//   { title: "Ergebnis 9", type: "Type 9", costs: "Kosten 9", language: "Sprache 9", duration: "Dauer 9" },
//   { title: "Ergebnis 10", type: "Type 10", costs: "Kosten 10", language: "Sprache 10", duration: "Dauer 10" }
// ];





  const LandingPage = () => {
    const [visibleResults, setVisibleResults] = useState(3);
    const [tags, setTags] = useState([]);
    const[solutions, setSolutions] = useState([]);

  
    const showMoreResults = () => {
      setVisibleResults((prev) => prev + 3);

    };

  
    useEffect(() => {
      fetch(`http://localhost:3000/tag`) // Verwenden Sie Template-Literals, um die URL zu erstellen
        .then(response => response.json())
        .then(tags => {
          setTags(tags); // Speichern Sie die erhaltenen Tags im State
        })
        .catch(error => {
          console.error('Fehler beim Abrufen der Tags:', error);
        });
    }, []);

    useEffect(() => {
      fetch(`http://localhost:3000/solution`) // Verwenden Sie Template-Literals, um die URL zu erstellen
        .then(response => response.json())
        .then(solutions => {
          setSolutions(solutions); // Speichern Sie die erhaltenen Tags im State
        })
        .catch(error => {
          console.error('Fehler beim Abrufen der Solutions:', error);
        });
    }, []);


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
          <button key={index} className="tag-button">{tag.name}</button>
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
                <p>Type: {solution.short_description}</p>
                <p>Costs: {solution.link}</p>
                <p>Language: {solution.standort}</p>
                
              </div>
            </div>
          ))}
          {visibleResults < solutions.length && (
            <button className="show-more-button" onClick={showMoreResults}>Mehr anzeigen</button>
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
