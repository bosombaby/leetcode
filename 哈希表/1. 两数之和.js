/**
 * 哈希表记录
 */
var twoSum = function(nums, target) {
    let n=nums.length,count
    let map = new Map()
    for(let i=0;i<n;i++){
        count = target - nums[i]
        if(map.has(count))
            return [i,map.get(count)]
        else
            map.set(nums[i],i)
    }
    return []
};