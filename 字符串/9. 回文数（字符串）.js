/**
 * 转换为字符串
 */
var isPalindrome = function(x) {
    if(x<0)
      return false
    let str1 = x.toString()
    let str2 = x.toString().split('').reverse().join('')
    if(str1 === str2)
      return true
    return false
};