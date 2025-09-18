// backend/database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./cartola.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS apostas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT NOT NULL
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS times (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    jogadores TEXT NOT NULL
  )`);
});

module.exports = db;