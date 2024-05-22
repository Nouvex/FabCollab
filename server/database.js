// database.js


// Test der Connection

const { Sequelize } = require('sequelize');

// Verbindung zur Datenbank herstellen
const sequelize = new Sequelize('postgres://fnobacbr:GBDvS_Q1J7PYDMCdrqFNdufkXQWFekrz@flora.db.elephantsql.com/fnobacbr');
module.exports =sequelize;




// Testfunktion für die Verbindung zur Datenbank
// async function testDatabaseConnection() {
//     try {
//         // Versuche, eine Verbindung zur Datenbank herzustellen
//         await sequelize.authenticate();
//         console.log('Die Verbindung zur Datenbank wurde erfolgreich hergestellt.');
//     } catch (error) {
//         // Wenn ein Fehler auftritt, gebe eine Fehlermeldung aus
//         console.error('Fehler beim Herstellen der Verbindung zur Datenbank:', error);
//     } finally {
//         // Schließe die Datenbankverbindung, wenn sie nicht mehr benötigt wird
//         await sequelize.close();
//     }
// }

// // Teste die Verbindung zur Datenbank
// testDatabaseConnection();
