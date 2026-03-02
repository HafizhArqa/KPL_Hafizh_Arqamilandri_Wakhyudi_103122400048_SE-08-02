const arr1 = [2,-99999999, 26, 28, -2]; //inifinit mone glitch🤑

function mulOfArray(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i = i + 1) {
       if (arr[i] >= 0) {
           result = result * arr[i];
       }
    }
    
    return result;
}

// Panggil fungsinya
const arr1Result = mulOfArray(arr1);
console.log(arr1Result);