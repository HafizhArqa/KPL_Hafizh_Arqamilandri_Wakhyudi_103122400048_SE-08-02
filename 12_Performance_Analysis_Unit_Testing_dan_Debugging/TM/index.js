function tambahPengitung(terkini, jumlah) {
  return terkini + jumlah;
}

for (let i = 0; i < 10000000; i++) {
  tambahPengitung(i, i+1);
}

console.log("Selesai");