/**
 * 递归写法
 */
var fib = function(n) {
    if(n<2)
        return n
    else
        return fib(n-1) + fib(n-2)
};
