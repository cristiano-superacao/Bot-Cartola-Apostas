export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([
      { id: 1, descricao: "Aposta Exemplo 1" },
      { id: 2, descricao: "Aposta Exemplo 2" }
    ]);
  } else if (req.method === 'POST') {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", () => {
      const { descricao } = JSON.parse(body);
      res.status(201).json({ id: Math.floor(Math.random() * 1000), descricao });
    });
  } else {
    res.status(405).end();
  }
}