// backend/server.js
import express from 'express';
import cors from 'cors';
import Database from 'sqlite3';
const { Database: DB } = Database;

const app = express();

// Initialize database
const db = new DB('./database.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
    
    // Create tables if they don't exist
    db.run(`CREATE TABLE IF NOT EXISTS apostas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      descricao TEXT NOT NULL
    )`);
    
    db.run(`CREATE TABLE IF NOT EXISTS times (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      jogadores TEXT NOT NULL
    )`);
  }
});

app.use(cors());
app.use(express.json());

// Rotas para apostas
app.get('/apostas', (req, res) => {
  db.all('SELECT * FROM apostas', [], (err, rows) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(rows);
  });
});

app.post('/apostas', (req, res) => {
  const { descricao } = req.body;
  db.run('INSERT INTO apostas (descricao) VALUES (?)', [descricao], function(err) {
    if (err) return res.status(500).json({ erro: err.message });
    res.json({ id: this.lastID, descricao });
  });
});

// Rotas para times
app.get('/times', (req, res) => {
  db.all('SELECT * FROM times', [], (err, rows) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(rows);
  });
});

app.post('/times', (req, res) => {
  const { nome, jogadores } = req.body;
  db.run('INSERT INTO times (nome, jogadores) VALUES (?, ?)', [nome, JSON.stringify(jogadores)], function(err) {
    if (err) return res.status(500).json({ erro: err.message });
    res.json({ id: this.lastID, nome, jogadores });
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));