const palindromes = function (string) {
    string = filterLetters(string);
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

function filterLetters (string) {
    let filtered = "";
    for (let character of string) {
        if ( isLetter(character)) {
            filtered += character;
        }
    }
    return filtered
}

// Do not edit below this line
module.exports = palindromes;
