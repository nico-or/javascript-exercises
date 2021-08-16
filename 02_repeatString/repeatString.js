const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    } else {
        let output = '';
        for (let i = 0; i < num; i++){
            output += string;
        }
        return output;
    }
};

module.exports = repeatString;
