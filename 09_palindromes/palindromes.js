const palindromes = function (string) {
    return string == reverseString(string);
};

function reverseString(string) {
    let reverse = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse;
}

// Do not edit below this line
module.exports = palindromes;
