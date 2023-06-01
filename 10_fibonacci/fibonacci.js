const fibonacci = function(num) {
    if(typeof num !== 'number') num = parseInt(num);
    if(num < 0) return 'OOPS';
    let fibArr = [];
    for(let i=0; i<num; i++) {
        if(i < 2) fibArr.push(1);
        else fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }
    return fibArr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
