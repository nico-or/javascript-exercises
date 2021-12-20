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

function isLower (char) {
    return char >= "a" && char <= "z";
}

function isUpper (char) {
    return char >= "A" && char <= "Z";
}

function isLetter (char) {
    return isLower(char) || isUpper(char);
}

// Do not edit below this line
module.exports = palindromes;
