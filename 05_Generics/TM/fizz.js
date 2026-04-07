/**
 * 
 * @param {number} value 
 * @returns {number | string}
 * @throws {Error} 
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
 * 
 * @param {number[]} sequence 
 * @returns {(number | string)[]}
 * @throws {Error} 
 */
function fizzBuzz(sequence) {
    if (!Array.isArray(sequence)) {
        throw new Error("Input harus berupa array");
    }

  
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