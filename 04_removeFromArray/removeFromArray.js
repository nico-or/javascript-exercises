const removeFromArray = function() {
    // parse input
    let array = arguments[0]
    let toRemove = []
    for (let i = 1; i < arguments.length; i++){
        toRemove.push(arguments[i])
    }

    // filter values
    let output = []
    let current
    for (let i = 0; i < array.length; i++){
        current = array[i]
        if (toRemove.includes(current) == false){
            output.push(current)
        }
    }
    return output
};

// Do not edit below this line
module.exports = removeFromArray;
