function main() {
  const data = [
    "123",
    456,
    "hello",
    78.9,
    true,
  ];

  for (let i = 0; i < data.length; i++) {
    const result = processData(data[i]);
    console.log(`Item ${i + 1}: ${data[i]} -> ${result}`);
  }
}
//awal Masalah
// function processData(data) {
//   const str = data.toLowerCase();
//   const num = parseInt(str);
//   if (!isNaN(num) && str === String(num)) {
//     return `Number: ${num * 2}`;
//   }
//   return `Teks: ${str} (panjangnya: ${str.length})`;
// }

// main();


function processData(data) {
  // Cperbaikan
  if (typeof data !== 'string') {
    // perbaikan
    const strData = String(data);
    return `Teks: ${strData} (panjangnya: ${strData.length})`;
  }
  
  const str = data.toLowerCase();
  const num = parseInt(str);
  
  if (!isNaN(num) && str === String(num)) {
    return `Number: ${num * 2}`;
  }
  return `Teks: ${str} (panjangnya: ${str.length})`;
}
main();