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
          <h2>Nach Themen</h2>
          <ul className="topic-list">
            <li>
              <a href="#topic1">Angst</a>
            </li>
            <li>
              <a href="#topic2">Depression</a>
            </li>
            <li>
              <a href="#topic3">Drogenmissbrauch</a>
            </li>
            <li>
              <a href="#topic4">Schlafstörung</a>
            </li>
          </ul>
          <h2>Einstellungen</h2>
          <ul className="settings">
            <li>
              <a href="#settings">Einstellungen</a>
            </li>
            <li>
              <a href="#impressum">Impressum</a>
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
            <h2>Pelikan-245</h2>
            <small>vor 1 Stunde</small>
          </div>
          <p>Ich habe vor einigen Jahren begonnen, unter Angststörungen zu leiden. Es fing mit gelegentlichen Panikattacken an und entwickelte sich schnell zu einer allgegenwärtigen Angst, die mein Leben stark einschränkte. Es war, als würde ich ständig in Erwartung des Schlimmsten leben. Einfache Dinge wie Einkaufen oder Treffen mit Freunden wurden zu unüberwindbaren Herausforderungen. Es hat lange gedauert, bis ich mir Hilfe gesucht habe, aber der Weg zur Therapie war der erste Schritt zurück in ein normales Leben. Heute bin ich dankbar, dass ich gelernt habe, mit meiner Angst umzugehen und sie nicht mehr mein Leben bestimmen zu lassen</p>
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
              <h2>Löwe-987</h2>
              <small>vor 2 Stunden</small>
            </div>
            <p>Seit meiner Jugend kämpfe ich mit Depressionen. Es ist schwer, den Leuten zu erklären, wie es sich anfühlt, wenn man morgens nicht aus dem Bett kommen kann und die Welt nur noch grau erscheint. Die Erschöpfung, die Hoffnungslosigkeit und die ständige Selbstkritik machen jeden Tag zu einem Kampf. Es war ein langer Weg, aber mit der richtigen Therapie und Unterstützung habe ich gelernt, kleine Schritte zu machen und mir selbst gegenüber geduldiger zu sein. Es ist immer noch schwer, aber ich habe Hoffnung, dass es besser wird.</p>
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
              <h2>Schildkröte-874</h2>
              <small>vor 3 Stunden</small>
            </div>
            <p>Ich habe eine posttraumatische Belastungsstörung (PTBS) nach einem schweren Unfall entwickelt. Die Flashbacks und Albträume haben mein Leben zur Hölle gemacht. Es war, als würde ich das Trauma immer wieder durchleben. Die Therapie hat mir geholfen, meine Erlebnisse zu verarbeiten und Techniken zu entwickeln, um die Kontrolle über mein Leben zurückzugewinnen. Es war ein harter Weg, aber ich habe gelernt, dass Heilung möglich ist und dass ich nicht allein bin.</p>
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
            <p>Meine Erfahrung mit einer Essstörung war extrem isolierend. Die ständige Beschäftigung mit meinem Körper und Essen nahm mein ganzes Denken ein. Es war ein Teufelskreis aus Kontrolle und Verlust der Kontrolle. Die Scham und Schuldgefühle machten es mir schwer, darüber zu sprechen. Als ich endlich den Mut fand, Hilfe zu suchen, war ich überrascht, wie viele Menschen ähnliche Kämpfe durchmachen. Die Therapie hat mir geholfen, ein gesünderes Verhältnis zu meinem Körper und Essen zu entwickeln und mir gezeigt, dass ich wertvoll bin, unabhängig von meinem Aussehen.</p>
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
