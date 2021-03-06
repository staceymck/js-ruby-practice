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


//calculate ratio of pos, neg and 0 in an array
//frequency is numerator
//length of array is denominator

//sample input
const ratioFinderArr = [-3, -5, 0, 6, 9]

function toSixDecimals(num) {
  return num.toFixed(6) //converts number to string
}

function ratioFinder(arr) {

  let pos = 0
  let neg = 0
  let zero = 0
  let denom = arr.length

  arr.forEach(num => {
    if (num === 0) {
      zero++
    } else if (num < 0) {
      neg++
    } else {
      pos++
    }
  })

  console.log(toSixDecimals(pos/denom))
  console.log(toSixDecimals(neg/denom))
  console.log(toSixDecimals(zero/denom))
}

//print staircase
function staircase(n) {
  let space = " ";
  let symbol = "#";

  let numSpaces = n - 1;
  let numSymbols = 1; 

  while (numSymbols <= n) {

    let row = []
    for (let i = 1; i <= numSpaces; i++) {
      row.push(space)
    }

    for (let i = 1; i <= numSymbols; i++) {
      row.push(symbol)
    }

    console.log(row.join(""))

    numSpaces--
    numSymbols++
  }
}

//Get min and max sum given array of 5 int, sum calculated using 4 ints 
const minMaxArray = [1, 2, 3, 4, 5]

function miniMax(arr) {
  let sorted = arr.sort((a, b) => {
    return a - b;
  })

  let min = 0;
  for (let i = 0; i < 4; i++) {
    min += sorted[i]
  }

  let max = 0;
  for (let i = 1; i < 5; i++) {
    max += sorted[i]
  }

  console.log(`${min} ${max}`)
}


//count frequency of largest number in array
function countFrequency(arr) {
  let max = Math.max(...arr)
  let frequency = 0

  arr.forEach(num => {
    if (num === max) {
      frequency++
    }
  })

  return frequency
}

//convert 12hr time to 24hr time
function toMiltaryTime(timeString) {
  const dayPeriod = timeString.slice(-2) //AM or PM
  const minSec = timeString.slice(3, 8)
  let hour = timeString.slice(0, 2)

  if (dayPeriod === "AM" && hour === "12") {
    hour = "00"
  }

  if (dayPeriod === "PM" && hour !== "12") {
    hour = (parseInt(hour) + 12).toString()
  }

  return hour + ":" + minSec
}

//fizzbuzz
function fizzBuzzFor() {
  for (let i = 1; i <=100; i++) {
    let word = "";

    if (i % 3 === 0) {
      word = "Fizz";
    }
    
    if (i % 5 === 0) {
      word += "Buzz";
    }

    console.log(word || i)
  }
}

function fizzBuzzWhile() {
  let i = 1;
  while (i <= 100) {
    let word = "";

    if (i % 3 === 0) {
      word = "Fizz";
    }
    
    if (i % 5 === 0) {
      word += "Buzz";
    }

    console.log(word || i)
    i++
  }
}