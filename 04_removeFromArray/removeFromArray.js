const removeFromArray = function() {
    const array = arguments[0];
    const itemsToRemove = Array.from(arguments).slice(1);
    return array.filter(item => !itemsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
