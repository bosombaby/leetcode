/**
 * 之前写过文章，https://juejin.cn/post/7082532205422968863
 * dp[i]表示以i结尾的子序列长度最大是多少
 */
var lengthOfLIS = function(nums) {
   let n = nums.length,max=1
   let dp = new Array(n)
   for(let i=0;i<n;i++){
       dp[i] = 1
       for(let j=0;j<i;j++){
           if(nums[j]<nums[i])
                dp[i] = Math.max(dp[j]+1,dp[i])
       }

        max = Math.max(max,dp[i])
   }
   return max
};