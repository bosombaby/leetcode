// 写一个函数判断数组是升序、降序、或乱序。相应输出1、-1、0

const array = [5,4,3,2,1]
let judgeArrayOrder = (array) => {
    const ascending = array.slice().sort((a, b) => a - b)
    const descending = array.slice().sort((a, b) => b - a)

    if (JSON.stringify(array) === JSON.stringify(ascending))
        return 1
    else if (JSON.stringify(array) === JSON.stringify(descending))
        return -1
    else 
        return 0
}

console.log(judgeArrayOrder(array));