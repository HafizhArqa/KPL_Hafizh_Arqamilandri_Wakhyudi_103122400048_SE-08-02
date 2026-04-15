function toNumberArray(number) {
  let arr;

  if (typeof number === "string") {
    arr = number.split(",");
  } else {
    arr = number;
  }

  return arr
    .map(item => Number(item.trim())) 
    .filter(item => !isNaN(item));   
}
console.log(toNumberArray("1, 2")) // [1, 2]
console.log(toNumberArray(["1", "2"])) // [1, 2]
console.log(toNumberArray(" 11,55,33   ")) // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11]