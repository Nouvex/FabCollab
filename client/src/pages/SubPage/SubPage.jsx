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
                <p><strong>Beschreibung:</strong> {solution.description}</p>
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
              <p>Herzlich Willkommen bei unserer Psychologischen Beratungsstelle! Inmitten der Herausforderungen des Alltags können Belastungen und Krisen jeden von uns treffen. Ob Stress im Beruf, familiäre Konflikte, persönliche Krisen oder psychische Erkrankungen – wir sind hier, um Sie auf Ihrem Weg zu begleiten. Unsere Beratungsstelle bietet Ihnen einen sicheren und vertrauensvollen Raum, in dem Sie Unterstützung und Orientierung finden können. Unser Team aus erfahrenen Psychologen und Therapeuten steht Ihnen mit Fachwissen, Empathie und Diskretion zur Seite. Gemeinsam erarbeiten wir individuelle Lösungswege, um Ihre psychische Gesundheit zu stärken und Ihre Lebensqualität nachhaltig zu verbessern.</p>
            </div>
            <div className="pros-and-cons">
              <div className="pros">
                <h3>Pros</h3>
                <ul>
                  <li><span className="icon">&#x2714;</span> Freundliches Personal</li>
                  <li><span className="icon">&#x2714;</span> Kurze Wartezeiten</li>
                  <li><span className="icon">&#x2714;</span> Kulturelle Offenheit</li>
                </ul>
              </div>
              <div className="cons">
                <h3>Contras</h3>
                <ul>
                  <li><span className="icon">&#x2716;</span> Kosten</li>
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
              <p>Unsere Psychologische Beratungsstelle ist spezialisiert auf ein breites Spektrum an psychischen und emotionalen Herausforderungen, denen Menschen in unterschiedlichen Lebensphasen begegnen können. Mit einem interdisziplinären Team aus Psychologen, Therapeuten und Sozialarbeitern bieten wir umfassende Unterstützung und maßgeschneiderte Lösungen für eine Vielzahl von Anliegen.
                <br></br>
                <div className="spezialisierung">
                <br></br><strong>1.</strong>Stress- und Burnout-Prävention
                <br></br><strong>2.</strong>Depressions- und Angstbewältigung
                <br></br><strong>3.</strong>Familien- und Paartherapie
                <br></br><strong>4.</strong>Traumatherapie
                <br></br><strong>5.</strong>Kinder- und Jugendberatung
                <br></br><strong>6.</strong>Lebenskrisen und Veränderungssituationen
                <br></br><strong>7.</strong>Suchtberatung
                </div>
                <br></br>
                <br></br>Wir sind davon überzeugt, dass jeder Mensch das Potenzial hat, seine Herausforderungen zu meistern und ein erfülltes Leben zu führen. Unsere Beratungsstelle ist ein Ort der Hoffnung und Heilung, an dem Sie Unterstützung finden und neue Wege beschreiten können. Zögern Sie nicht, Kontakt mit uns aufzunehmen – wir sind für Sie da.</p>
            </div>
            <div className="top-comments">
              <h2>Top Beiträge aus dem Forum</h2>
              <div className="comments">
                <div className="comment">
                  <p>"Ich war aufgrund von anhaltendem Stress und Erschöpfung in der Beratungsstelle und kann nur Positives berichten. Die Therapeuten sind unglaublich einfühlsam und professionell. Schon nach wenigen Sitzungen habe ich gelernt, besser mit meinem Stress umzugehen und meine Work-Life-Balance zu verbessern. Diese Beratungsstelle hat mir wirklich geholfen, wieder zu mir selbst zu finden. Vielen Dank" - <strong>User A</strong></p>
                </div>
                <div className="comment">
                  <p>"Nachdem meine Ehe in eine tiefe Krise geraten war, haben mein Partner und ich uns für eine Paartherapie bei dieser Beratungsstelle entschieden. Wir fühlten uns von Anfang an gut aufgehoben. Die Gespräche waren intensiv, aber stets respektvoll und konstruktiv. Dank der wertvollen Unterstützung haben wir gelernt, besser zu kommunizieren und unsere Beziehung wieder zu stärken. Ich kann diese Beratungsstelle nur weiterempfehlen." - <strong>User B</strong></p>
                </div>
                <div className="comment">
                  <p>"Unser Sohn hatte große Schwierigkeiten in der Schule und war sehr zurückgezogen. Die Kinder- und Jugendberatung in dieser Beratungsstelle war ein echter Segen für unsere Familie. Die Therapeuten haben nicht nur unserem Sohn geholfen, sein Selbstvertrauen zurückzugewinnen, sondern uns auch als Eltern wertvolle Tipps gegeben, wie wir ihn besser unterstützen können. Wir sind sehr dankbar für die professionelle und herzliche Betreuung." - <strong>User C</strong></p>
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
