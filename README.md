# 前言
[图解数据结构 - 知心宝贝的专栏 - 掘金](https://juejin.cn/column/7062609197975732254)

[图解数据结构_知心宝贝的博客-CSDN博客](https://blog.csdn.net/qq_53673551/category_11512367.html)

[算法题每日一练 - 知心宝贝的专栏 - 掘金](https://juejin.cn/column/7054783987117457421)

[Hello 算法](https://www.hello-algo.com/)

[力扣](https://leetcode.cn/leetbook/detail/illustration-of-algorithm/)

[前端该如何准备数据结构和算法？ - 掘金](https://juejin.cn/post/6844903919722692621)

[https://github.com/vortesnail/leetcode](https://github.com/vortesnail/leetcode)
# 基本教程
由于 es6 和其它的强类型场景不一致，比如 c++ 内置的许多函数没有，无法直接自定义二维数组，一些可代替的特性如下所示。
## 一维数组
```typescript
//限制长度
const array = new Array(5)
//不限制长度
const array = []
//可迭代，浅拷贝为数组
console.log(Array.from([1, 2, 3], (x) => x + x));
```
## 二维数组
```javascript
// map遍历二维数组
const array = new Array(n).fill(0).map(()=>new Array(n))
```
# 动态规划⭐**⭐⭐**

- [509.斐波那契数](https://leetcode.cn/problems/fibonacci-number/)
- [300.最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence/)
- [718.最长重复子数组](https://leetcode.cn/problems/maximum-length-of-repeated-subarray/)


# 数组

- 写一个函数判断数组是升序、降序、或乱序。相应输出1、-1、0
- [867. 转置矩阵](https://leetcode.cn/problems/transpose-matrix/description/)
# 字符串**⭐⭐⭐**

- [14.最长公共前缀](https://leetcode.cn/problems/longest-common-prefix/)
- [9. 回文数](https://leetcode.cn/problems/palindrome-number/)
- [151. 反转字符串中的单词](https://leetcode.cn/problems/reverse-words-in-a-string/)


