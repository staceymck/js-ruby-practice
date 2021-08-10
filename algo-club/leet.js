// Remove duplicates in the array in place (don't create new array)
var removeRepeats = function(nums) {
  let i = 0
  let j = 1
  
  while (j < nums.length) {
      if (nums[i] !== nums[j]) { //unique value
          i++
          nums[i] = nums[j]
          j++
      } else { //j is duplicate value
          j++
      }
  }
  return i + 1
};