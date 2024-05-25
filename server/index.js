const express = require('express');
const cors = require('cors');
const app = express();

// Erlauben Sie Anfragen vom Frontend (Port 4000)
app.use(cors({
  origin: 'http://localhost:4000',
  credentials: true // Wenn Cookies in CORS-Anfragen erlaubt sein sollen
}));

// Einbinden der Routen aus verschiedenen Dateien
const userRoutes = require('./routes/userRoutes');
const tagRoutes = require('./routes/tagRoutes');
const solutionRoutes = require('./routes/solutionRoutes');
const postRoutes = require('./routes/postRoutes');
const solutionTagRoutes = require('./routes/solutionTagRoutes');

// Verwende die Routen in der Hauptdatei
app.use('/user', userRoutes);
app.use('/tag', tagRoutes);
app.use('/solution', solutionRoutes);
app.use('/post', postRoutes);
app.use('/solutionTag', solutionTagRoutes);




// Starten Sie den Server auf Port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});



