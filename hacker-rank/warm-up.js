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

//Given a square matrix, calculate the absolute difference between the sums of its diagonals
//Version 1 with 1D array as input
const two = [2, 4, -1, 2, 3]
const three = [3, 11, 2, 4, 4, 5, 6, 10, 8, -12]
const four = [4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

function sum(arr) {
  return arr.reduce((a, b) => {
    return a + b;
  });
}

function absDiffDiag(arr) {
  const sq = arr[0]
  let diagNums = []
  let diagNums2 = []
 
  let i = 1;
  while (i < arr.length) {
    diagNums.push(arr[i]);
    i += (sq + 1);
  }

  let j = sq;
  while (j <= (arr.length - sq)) {
    diagNums2.push(arr[j]);
    j += (sq - 1);
  }
  
  return Math.abs(sum(diagNums) - sum(diagNums2))
}

//Version 2 with 2D array as input
//still utilize sum() function defined above
const twoV2 = [[4, -1], [2, 3]]
const threeV2 = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]

function absDiagDiff(arr) {
  let diagNums = []
  let diagNums2 = []
  
  let i = 0 
  let j = 1

  while (i < arr.length) {
    diagNums.push(arr[i][i])
    diagNums2.push(arr[i][arr.length - j])
    j++
    i++
  }

  return Math.abs(sum(diagNums) - sum(diagNums2))
}