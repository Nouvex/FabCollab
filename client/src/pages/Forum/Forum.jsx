import React from 'react';
import './Forum.css';

const Forum = () => {
  return (
    <div className="container">
      {/* Left Column */}
      <div className="left-column">
        <div className="box">
          <h2>Current Topics</h2>
          <ul className="topic-list">
            <li><a href="#topic1">Anxiety</a></li>
            <li><a href="#topic2">Depression</a></li>
            <li><a href="#topic3">Psychosis</a></li>
            <li><a href="#topic4">Suizid</a></li>
          </ul>
          <h2>Settings</h2>
          <ul className="settings">
            <li><a href="#settings">Settings</a></li>
            <li><a href="#impressum">Imprint</a></li>
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
            <div className="post-header">
              <h2>Pelican-245</h2>
              <small>one hour ago</small>
            </div>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <div className="post-footer">
              <button>Like</button>
              <button>Comment</button>
              <button>Report</button>
            </div>
          </div>
          <div className="post">
            <div className="post-header">
              <h2>Lion-987</h2>
              <small>2 hours ago</small>
            </div>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <div className="post-footer">
              <button>Like</button>
              <button>Comment</button>
              <button>Report</button>
            </div>
          </div>
          <div className="post">
            <div className="post-header">
              <h2>Turtle-874</h2>
              <small>3 hours ago</small>
            </div>
            <p>Dies ist noch ein weiterer Beispieltext für einen Post.</p>
            <div className="post-footer">
              <button>Like</button>
              <button>Comment</button>
              <button>Report</button>
            </div>
          </div>
          <div className="post">
            <div className="post-header">
              <h2>User Name</h2>
              <small>vor 3 Stunden</small>
            </div>
            <p>Dies ist noch ein weiterer Beispieltext für einen Post.</p>
            <div className="post-footer">
              <button>Like</button>
              <button>Comment</button>
              <button>Report</button>
            </div>
          </div>
          <div className="post">
            <div className="post-header">
              <h2>User Name</h2>
              <small>vor 3 Stunden</small>
            </div>
            <p>Dies ist noch ein weiterer Beispieltext für einen Post.</p>
            <div className="post-footer">
              <button>Like</button>
              <button>Comment</button>
              <button>Report</button>
            </div>
          </div>
          <div className="post">
            <div className="post-header">
              <h2>User Name</h2>
              <small>vor 3 Stunden</small>
            </div>
            <p>Dies ist noch ein weiterer Beispieltext für einen Post.</p>
            <div className="post-footer">
              <button>Like</button>
              <button>Comment</button>
              <button>Report</button>
            </div>
          </div>
          {/* Weitere Posts hier */}
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <div className="motivational-quote box">
          <h2>Motivationsspruch</h2>
          <p>"Glaube an dich selbst und alles ist möglich."</p>
        </div>
        <div className="info-box box">
          <h2>Informationen</h2>
          <p>Hier finden Sie wichtige Informationen.</p>
        </div>
      </div>
    </div>
  );
};

export default Forum;
