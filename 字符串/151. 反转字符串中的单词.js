/**
 * 字符串翻转，利用字符串 => 数组
 */
var reverseWords = function(s) {
    let result = s.split(' ').reverse()

    result = result.filter(word=>word!='')
    return result.join(' ')
};
s = "  hello world  "
console.log(reverseWords(s));