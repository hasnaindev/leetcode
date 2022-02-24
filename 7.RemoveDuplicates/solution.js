/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  for (let i = 0; i < nums.length - 1; i++) nums[i] === nums[i + 1] && nums.splice(i--, 1)
}
