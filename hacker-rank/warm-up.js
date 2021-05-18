// Given an array of integers, find the sum of its elements
// For example, ar = [1,2,3] returns 6

function simpleArraySum(ar) {
  return ar.reduce((memo, value) => memo + value, 0)
}

//Given two arrays of 3 integers, compare the value of the same index
//in each array (e.g., a[0] vs b[0]). If a's value is larger, a recieves a point.
//If b's value is larger, b gets point. No points if same value.
//Return final score as array: [aPoints, bPoints]

function compareTriplets(a, b) {
  let score = [0, 0]

  for (let i = 0; i < 3; i++) {
    if(a[i] > b[i]) {
      score[0] += 1
    } else if(a[i] < b[i]) {
      score[1] += 1
    }
  }

  return score
}

//Create function to add large integers
function aVeryBigSum(ar) {
  return ar.reduce((memo, num) => BigInt(memo) + BigInt(num), 0)
}