const arr1 = [2, 0, 26, 28, -2]; 

function mulOfArray(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i = i + 1) {
       if (arr[i] > 0) { //modified untuk menghasil kan 1456 dengan tidak menamahkan 0 sebagai bilangan positif
           result = result * arr[i];
       }
    }
    
    return result;
}

// Panggil fungsinya
const arr1Result = mulOfArray(arr1);
console.log(arr1Result);