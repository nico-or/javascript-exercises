const sumAll = function(first,last) {
    let sum = 0;
    for (let i = first; i <= last; i++){
        sum += i
    }
    return sum
};

module.exports = sumAll;
