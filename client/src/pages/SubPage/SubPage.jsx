import React from 'react';
import { useLocation } from 'react-router-dom';
import './SubPage.css';
import therapeut from '../../assets/therapeut.jpg';
import aok from '../../assets/aok.jpg';
import barmer from '../../assets/barmer.jpg';
import dak from '../../assets/dak.svg';
import mobil from '../../assets/mobil.png';
import tk from '../../assets/tk.png';

const SubPage = ({ isLoggedIn }) => {
  const location = useLocation();
  const { solution } = location.state || {};

  return (
    <div className="forum">
      {solution ? (
        <>
          <div className="therapist-ad">
            <div className="content">
              <div className="image-container">
                <img src={therapeut} alt="Therapist" />
              </div>
              <div className="info">
                <h2>{solution.name}</h2>
                <p><strong>Beschreibung:</strong> {solution.short_description}</p>
                <p><strong>Standort:</strong> {solution.standort}</p>
                <p><strong>Link:</strong> <a href={solution.link} target="_blank" rel="noopener noreferrer">{solution.link}</a></p>
              </div>
              {isLoggedIn && (
                <div className="rating-system">
                  <h2>Bewertung</h2>
                  <button id="thumbsUpButton" className="thumbs-up">👍</button>
                  <span id="thumbsUpCount">164</span>
                  <button id="thumbsDownButton" className="thumbs-down">👎</button>
                  <span id="thumbsDownCount">12</span>
                </div>
              )}
            </div>
            <div className="description">
              <h2>Intro</h2>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="pros-and-cons">
              <div className="pros">
                <h3>Pros</h3>
                <ul>
                  <li><span className="icon">&#x2714;</span> Freundliches Personal</li>
                  <li><span className="icon">&#x2714;</span> Kurze Wartezeiten</li>
                  <li><span className="icon">&#x2714;</span> Zentrale Lage</li>
                </ul>
              </div>
              <div className="cons">
                <h3>Contras</h3>
                <ul>
                  <li><span className="icon">&#x2716;</span> Begrenzte Parkmöglichkeiten</li>
                  <li><span className="icon">&#x2716;</span> Hohe Nachfrage</li>
                </ul>
              </div>
            </div>
            <div className="insurance-logos">
              <h2>Gedeckt von:</h2>
              <div className="logos">
                <img src={aok} alt="AOK" />
                <img src={barmer} alt="Barmer" />
                <img src={dak} alt="DAK" />
                <img src={mobil} alt="Mobil" />
                <img src={tk} alt="TK" />
              </div>
            </div>
            <div className="description">
              <h2>Spezialisierung</h2>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="top-comments">
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
              <button className="tag-button">Zum Forum</button>
            </div>
          </div>
        </>
      ) : (
        <p>Keine Details verfügbar. Bitte kehren Sie zur Hauptseite zurück und wählen Sie ein Ergebnis.</p>
      )}
    </div>
  );
};

export default SubPage;
