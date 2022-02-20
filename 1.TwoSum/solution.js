/**
 * Returns indices of the two numbers such
 * that they add up to target.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * @see https://leetcode.com/problems/two-sum/
 */
const twoSum = (nums, target) => {
  const map = new Map()

  for (const i in nums) {
    const n = nums[i]
    if (map.get(target - n))
      return [map.get(target - n), i]
    map.set(n, i)
  }
}
