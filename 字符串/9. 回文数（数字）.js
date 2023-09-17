/**
 * 转换为数字
 */
var isPalindrome = function(x) {
   let result = 0
   if(x<0 || (x%10==0&&x!=0))
        return false
    
    while(result<x){
        result = result*10 + x%10
        x = Math.floor(x/10)
    }
    return x==result || x==Math.floor(result/10)
    
};

console.log(isPalindrome(123211));