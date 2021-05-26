// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


function reverseInt(n) {
    let neg = false;
    if (n < 0) {
        neg = true;
        n *= -1;
    }
    let strN = n.toString()
    let revN = strN.split('').reduce((rev, char) => char + rev, '');

    //console.log(strN)
    //console.log(revN)
    return neg ? (Number(revN) * -1) : (Number(revN));
}

module.exports = reverseInt;
