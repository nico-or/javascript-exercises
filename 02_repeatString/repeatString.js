const repeatString = function(string, num) {
    let output = '';
    for (let i = 0; i < num; i++){
        output += string;
    }
    return output;
};

module.exports = repeatString;
