const fibonacci = function(n) {
    let prev1 = 0;
    let prev2 = 1;
    let acc = 0;
    for (let i = 0;i<n-1;i++) {
        acc = prev1 + prev2; 
        prev1 = prev2; 
        prev2 = acc; 
    };
    return acc;
};

// Do not edit below this line
module.exports = fibonacci;
