/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let sum = x;
        for(let i = functions.length - 1; i >= 0; i--) {
            fn = functions[i];
            sum = fn(x);
            x = sum
        }
        return sum;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */