/**
 * 动态规划写法，三步走战略
 */
var fib = function(n) {
    let dp = new Array(n+1)
    if(n<2)
        return n
    dp[0] = 0 ,dp[1] = 1
    for(let i=2;i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};