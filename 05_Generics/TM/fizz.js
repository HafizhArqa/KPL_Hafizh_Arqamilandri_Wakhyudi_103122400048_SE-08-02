/**
 * Mengubah angka menjadi "Fizz", "Buzz", "FizzBuzz", atau angka itu sendiri.
 * @param {number} value - Bilangan bulat.
 * @returns {number | string}
 * @throws {Error} Jika input bukan bilangan bulat.
 */
function zzzzOrNum(value) {
    if (!Number.isInteger(value)) {
        throw new Error("Input harus bilangan bulat");
    }

    if (value % 15 === 0) {
        return "FizzBuzz";
    }

    if (value % 3 === 0) {
        return "Fizz";
    }

    if (value % 5 === 0) {
        return "Buzz";
    }

    return value;
}

/**
 * Mengubah array angka dengan aturan FizzBuzz.
 * @param {number[]} sequence - Array berisi bilangan bulat.
 * @returns {(number | string)[]}
 * @throws {Error} Jika input bukan array atau elemennya bukan bilangan bulat.
 */
function fizzBuzz(sequence) {
    if (!Array.isArray(sequence)) {
        throw new Error("Input harus berupa array");
    }

    // validasi semua elemen harus integer
    sequence.forEach((e) => {
        if (!Number.isInteger(e)) {
            throw new Error("Semua elemen harus bilangan bulat");
        }
    });

    const newSequence = sequence.map((e) => zzzzOrNum(e));

    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};