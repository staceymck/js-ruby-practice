// Given an array of integers, find the sum of its elements
// For example, ar = [1,2,3] returns 6

function simpleArraySum(ar) {
  return ar.reduce((memo, value) => memo + value, 0)
}

