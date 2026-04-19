function is_not_fizzbuzz(number) {

  if (typeof number !== "number") {
    throw new TypeError("Input harus number");
  }

  if (!Number.isFinite(number)) {
    throw new TypeError("Tidak boleh NaN atau Infinity");
  }

  if (!Number.isInteger(number)) {
    throw new TypeError("Harus bilangan bulat");
  }

  if (number % 3 === 0) {
    return false;
  }

  if (number % 5 === 0) {
    return false;
  }

  return true;
}

console.log(is_not_fizzbuzz(1)) // true
console.log(is_not_fizzbuzz(3)) // false
console.log(is_not_fizzbuzz(5)) // false
console.log(is_not_fizzbuzz(30)) // false
console.log(is_not_fizzbuzz(7)) // true
console.log(is_not_fizzbuzz(null)) // Lempar TypeError
console.log(is_not_fizzbuzz(NaN)) // Lempar TypeError
console.log(is_not_fizzbuzz(Infinity)) // Lempar TypeError