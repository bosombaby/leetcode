const nums1 = [1, 2, 2, 1]
const nums2 = [2, 2]
var intersect = function (nums1, nums2) {
  let result = []
  let map = new Map()
  for (let num of nums1) map.set(num, (map.get(num) || 0) + 1)
  for (let num of nums2) {
    if (map.get(num)) {
      result.push(num)
      map.set(num, map.get(num) - 1)
    }
  }
  return result
}
const result = intersect(nums1, nums2)
console.log(result)
