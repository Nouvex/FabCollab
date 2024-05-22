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
          <button>Search</button>
        </div>
        <div className="new-post">
          <textarea placeholder="Write something..."></textarea>
          <button>Posten</button>
        </div>

        <div className="posts">
          <div className="post">
            {posts.slice(0, visibleResults).map((post, index) => (
              <div key={index} className="post-item">
                <div className="post-header">
                  <h3>{post.username}</h3>
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
    </div>
  );
};

export default Forum;
