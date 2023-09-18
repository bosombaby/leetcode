/**
 * 动态规划，dp[i]表示第i个元素结尾的最大值
 * 数组需要连续，所以很简单
 */
var maxSubArray = function(nums) {
    let n = nums.length
    let dp = new Array(n),max
    max = dp[0] = nums[0]
    for(let i=1;i<n;i++){
        dp[i] = Math.max(dp[i-1] + nums[i] ,nums[i])
        max = Math.max(max,dp[i])
    }
    return max;
};