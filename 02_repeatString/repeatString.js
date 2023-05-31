const repeatString = function(str, num) {
    let result = '';
    if(num<0) return 'ERROR';
    for(let i=0; i<num; i++){
        result += str;
    }
    return result;
};

//ES6 syntax
//const repeatString = (str,num) => num<0 ? 'ERROR' : str.repeat(num);

// Do not edit below this line
module.exports = repeatString;
