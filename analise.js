export function analisarUltimasRodadas(jogos, qtd = 5) {
  const ultimosJogos = jogos.slice(-qtd);
  const mediaGols = ultimosJogos.reduce((acc, jogo) => acc + (jogo.gols || 0), 0) / ultimosJogos.length;
  return { mediaGols, ultimosJogos };
}