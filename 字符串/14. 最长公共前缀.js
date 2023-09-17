/**
 * 字符串属性 ：排序、截取、匹配前缀
 * 排序参考资料：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
var longestCommonPrefix = function(strs) {
    const array = strs.sort((a,b)=>a.length - b.length)
    let result = ""
    for(let i=0;i<array[0].length;i++){
        result = array[0].slice(0,i+1)
        for(let j=1;j<array.length;j++){
            if(!array[j].startsWith(result))
                return result.slice(0,-1)
        }
    }
    return result
};