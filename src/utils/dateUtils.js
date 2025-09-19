export function getCurrentDate() {
  const now = new Date();
  return {
    dia: now.getDate(),
    mes: now.getMonth() + 1,
    ano: now.getFullYear()
  };
}

// Exemplo de cálculo de rodada (ajuste conforme a lógica do campeonato)
export function getCurrentRound(startDate, roundIntervalDays = 7) {
  const now = new Date();
  const start = new Date(startDate);
  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return Math.floor(diff / roundIntervalDays) + 1;
}