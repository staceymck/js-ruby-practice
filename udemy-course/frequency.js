//given two strings, determine if second is anagram of first
function isAnagram(string1, string2) {
  if (string1.length !== string2.length) return false

  //store frequencies of letters in each string
  let obj1 = {}
  let obj2 = {}

  //iterate over array elements
  for (let char of string1) {
    //if character exists as key in obj, increase value by 1, otherwise initialize to 1
    obj1[char] = (obj1[char] || 0) + 1
  }

  for (let char of string2) {
    //if character exists as key in obj, increase value by 1, otherwise initialize to 1
    obj2[char] = (obj2[char] || 0) + 1
  }

  //iterate over first object's keys (characters)
  for (let key in obj1) {
    //if key doesn't exist in obj2, string2 can't be an anagram
    if (!(key in obj2)) return false
    //if characters don't appear same # of times, string2 can't be an anagram
    if (obj1[key] !== obj2[key]) return false
  }

  return true
}