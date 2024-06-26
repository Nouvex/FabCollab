const express = require('express');
const cors = require('cors');
const app = express();

// Erlauben Sie Anfragen vom Frontend (Port 4000)
app.use(cors({
  origin: 'http://localhost:4000',
  credentials: true // Wenn Cookies in CORS-Anfragen erlaubt sein sollen
}));


app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

// Einbinden der Routen aus verschiedenen Dateien
const userRoutes = require('./routes/userRoutes');
const tagRoutes = require('./routes/tagRoutes');
const solutionRoutes = require('./routes/solutionRoutes');
const postRoutes = require('./routes/postRoutes');

// Verwende die Routen in der Hauptdatei
app.use('/user', userRoutes);
app.use('/tag', tagRoutes);
app.use('/solution', solutionRoutes);
app.use('/post', postRoutes);




// Starten Sie den Server auf Port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});



