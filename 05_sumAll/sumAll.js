const sumAll = function(...args) {
    if(!args.every(arg => typeof arg === 'number')) return 'ERROR';
    const start = args.sort((a,b) => a-b)[0];
    const end = args.sort((a,b) => a-b)[1];
    if(start < 0 || end < 0) return 'ERROR';
    let sum = 0;
    for(let i=start; i<=end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
