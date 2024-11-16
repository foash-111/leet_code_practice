/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let counter = 0;
    return function(...args){
        counter++;
        let x = fn(...args);
        if (counter === 1) {
        return x;
        }
        else{
            return undefined
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
