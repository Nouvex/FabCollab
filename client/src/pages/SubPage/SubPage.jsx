import React from 'react';
import './SubPage.css';
import therapeut from '../../assets/therapeut.jpg';
import aok from '../../assets/aok.jpg';
import barmer from '../../assets/barmer.jpg';
import dak from '../../assets/dak.svg';
import mobil from '../../assets/mobil.png';
import tk from '../../assets/tk.png';

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

     <div className="insurance-logos">
        <h2>Supported by:</h2>
        <div className="logos">
          <img src={aok} alt="AOK" />
          <img src={barmer} alt="Barmer" />
          <img src={dak} alt="DAK" />
          <img src={mobil} alt="Mobil" />
          <img src={tk} alt="TK" />
          {/* Weitere Logos können hier hinzugefügt werden */}
        </div>
      </div>


      <div className="top-comments">
        <h2>Top comments from the community</h2>
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
          {/* Weitere Kommentare können hier hinzugefügt werden */}
        </div>
        <p>Read more: <a href="https://www.forumwebsite.de" target="_blank" rel="noopener noreferrer">Forum</a>.</p>
      </div>
    </div>
    </div>
  );
};

export default Forum;