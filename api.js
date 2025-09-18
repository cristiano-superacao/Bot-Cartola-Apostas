export async function buscarDadosCampeonato(apiUrl) {
  try {
    const resp = await fetch(apiUrl);
    if (!resp.ok) throw new Error('Erro ao buscar dados');
    return await resp.json();
  } catch (e) {
    throw e;
  }
}