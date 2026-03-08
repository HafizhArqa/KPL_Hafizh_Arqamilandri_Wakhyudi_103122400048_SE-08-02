/** 
 * Tulislah sebuah fungsi yang menerima bilangan N dan mencetak
 * penjumlahan dari 1 hingga N. contohnya, jika N adalah 5, maka fungsi
 * akan mencetak 15 ( dalam hal ini menjumlahkan 1 + 2 + 3 + 4 + 5). 
*/

function sumNValues(N) {
let result = 0;
for (let i = 1; i <= N; i++){
    result = result + i
}
return result;
}
console.log (sumNValues(100));

