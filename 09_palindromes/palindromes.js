const palindromes = function (str) {
    let chars = str.toLowerCase().split('');
    let letters = chars.filter(char => char.match(/[a-z]/));
    return letters.join('') === letters.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
