const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

export async function buscarDadosCampeonato(apiUrl) {
  try {
    const resp = await fetch(apiUrl);
    if (!resp.ok) throw new Error('Erro ao buscar dados');
    return await resp.json();
  } catch (e) {
    throw e;
  }
}