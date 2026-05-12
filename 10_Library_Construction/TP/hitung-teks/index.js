export function hitungHuruf(teks) {
  const huruf = teks.match(/[a-zA-Z]/g);
  return huruf ? huruf.length : 0;
}

export function hitungKata(teks) {
  const kata = teks.match(/[a-zA-Z]+/g);
  return kata ? kata.length : 0;
}