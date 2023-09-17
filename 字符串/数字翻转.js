// 写一个函数翻转数字，如123——321、-123——-321、210——12
//让数字变为数组/字符串，然后处理
const num = 0
let reverseNum = (num) => {
    let result = Math.abs(num).toString()
    while (result.endsWith('0')) {
        result = result.slice(0,-1)
    }

    result = result.split('').reverse().join('')
    return Number(result)
    
}

console.log(reverseNum(num));