// backend/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database');
const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the static directory
app.use('/static', express.static(path.join(__dirname, 'static')));

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

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