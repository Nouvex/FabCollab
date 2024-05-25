import React, { useEffect, useState } from "react";
import "./Forum.css";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [visibleResults, setVisibleResults] = useState(3);
  const showMoreResults = () => {
    setVisibleResults((prev) => prev + 3);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/post`) // Verwenden Sie Template-Literals, um die URL zu erstellen
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts); // Speichern Sie die erhaltenen Tags im State
      })
      .catch((error) => {
        console.error("Fehler beim Abrufen der Posts:", error);
      });
  }, []);

  return (
    <div className="container">
      {/* Left Column */}
      <div className="left-column">
        <div className="box">
          <h2>Current Topics</h2>
          <ul className="topic-list">
            <li>
              <a href="#topic1">Anxiety</a>
            </li>
            <li>
              <a href="#topic2">Depression</a>
            </li>
            <li>
              <a href="#topic3">Psychosis</a>
            </li>
            <li>
              <a href="#topic4">Suizid</a>
            </li>
          </ul>
          <h2>Settings</h2>
          <ul className="settings">
            <li>
              <a href="#settings">Settings</a>
            </li>
            <li>
              <a href="#impressum">Imprint</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Middle Column */}
      <div className="middle-column">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Suche</button>
        </div>
        <div className="new-post">
          <textarea placeholder="Write something..."></textarea>
          <button>Posten</button>
        </div>

        <div className="posts"> <div className="post">
          <div className="post-header">
            <h2>Pelican-245</h2>
            <small>vor 1 Stunde</small>
          </div>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          <div className="post-footer">
              <div className="counts">
                <span>234 Likes</span>
                <span>109 Kommentare</span>
              </div>
          <div>
            <button>Like</button>
            <button>Kommentieren</button>
            <button>Melden</button>
          </div>
        </div>
        </div>
          <div className="post">
            <div className="post-header">
              <h2>Lion-987</h2>
              <small>vor 2 Stunden</small>
            </div>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <div className="post-footer">
            <div className="counts">
                <span>198 Likes</span>
                <span>20 Kommentare</span>
              </div>
          <div>
            <button>Like</button>
            <button>Kommentieren</button>
            <button>Melden</button>
          </div>
        </div>
        </div>
          <div className="post">
            <div className="post-header">
              <h2>Turtle-874</h2>
              <small>vor 3 Stunden</small>
            </div>
            <p>Dies ist noch ein weiterer Beispieltext für einen Post.</p>
            <div className="post-footer">
            <div className="counts">
                <span>92 Likes</span>
                <span>53 Kommentare</span>
              </div>
          <div>
            <button>Like</button>
            <button>Kommentieren</button>
            <button>Melden</button>
          </div>
        </div>
        </div>
          <div className="post">
            <div className="post-header">
              <h2>User Name</h2>
              <small>vor 3 Stunden</small>
            </div>
            <p>Dies ist noch ein weiterer Beispieltext für einen Post.</p>
            <div className="post-footer">
            <div className="counts">
                <span>73 Likes</span>
                <span>14 Kommentare</span>
              </div>
          <div>
            <button>Like</button>
            <button>Kommentieren</button>
            <button>Melden</button>
          </div>
        </div>
        </div>
          <div className="post">
            <div className="post-header">
              <h2>User Name</h2>
              <small>vor 3 Stunden</small>
            </div>
            <p>Dies ist noch ein weiterer Beispieltext für einen Post.</p>
            <div className="post-footer">
            <div className="counts">
                <span>12 Likes</span>
                <span>6 Kommentare</span>
              </div>
          <div>
            <button>Like</button>
            <button>Kommentieren</button>
            <button>Melden</button>
          </div>
        </div>
        </div>

          <div className="post-head">
            {posts.slice(0, visibleResults).map((post, index) => (
              <div key={index} className="post">
                <div className="post-header">
                  <h2>{post.username}</h2>
                  <small>vor 4 Stunden</small>
                </div>
                <p>{post.text}</p>
                <p>{post.berwetung}</p>

                <div className="post-footer">
                  <button>Like</button>
                  <button>Comment</button>
                  <button>Report</button>
                </div>
              </div>
            ))}
            {visibleResults < posts.length && (
              <button className="show-more-button" onClick={showMoreResults}>
                Mehr anzeigen
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Right Column */}
      <div className="right-column">
        <div className="motivational-quote box">
          <h2>Motivationsspruch</h2>
          <p>"Glaube an dich selbst und alles ist möglich."</p>
        </div>
        <div className="info-box box">
          <h2>Blog Beiträge</h2>
          <p>Hier finden Sie wichtige Informationen.</p>
        </div>
      </div>
    </div>

    
  );
};

export default Forum;
