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

// Find highest altitude in trip given an array of gains. Alt starts at 0.
var largestAltitude = function(gain) {
    let max = 0
    let currentAlt = 0
    
    for (let i = 0; i < gain.length; i++) {
        currentAlt = currentAlt += gain[i]
        
        if (currentAlt > max) {
            max = currentAlt
        }
    }
    
    return max
}; 