export function montarTimes(jogadores) {
  const times = [];
  for (let i = 0; i < 5; i++) {
    const time = {
      titulares: jogadores.slice(i * 11, (i + 1) * 11),
      banco: jogadores.slice(i * 11 + 11, i * 11 + 15),
      capitao: jogadores[i],
      reservaLuxo: jogadores[i + 1]
    };
    times.push(time);
  }
  return times;
}