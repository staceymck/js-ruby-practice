// Write a function that accepts any positive number between 1-1000
// and returns the sum of all numbers from 1 to that num

function addUp(num) {
  let sum = 0;
  for(let i = 1; i <= num; i++ ) {
    sum += i;
  }
  return sum
}

addUp(4) // 10
addUp(13) //91

// Alt solution
function addUpTo(num) {
  return n * (n + 1) / 2;
}


// Create a function that takes an integer, minutes, and converts it to seconds
function minToSec(minutes) {
  return minutes * 60
}

minToSec(3) //180
minToSec(2) //120


// Matchstick houses
// input will always be non-negative int

function matchstickHouses(num) {
  if (num === 0 ) return 0;
  
  let total = 6;
  for (let i = 2; i <= num; i++) {
    total += 5
  }

  return total
}

// Mimic left shift operation (multiplication by power of two)
function leftShiftMimic(x, y) {
  if (y === 0) return 0;

  let multiplier = 1;
  while (y > 0) {
    multiplier = multiplier * 2
    y--
  }

  return x * multiplier
} 

// Return [min, max] given array
function minMax(arr) {
  let result = []
  result.push(Math.min.apply(null, arr)) //apply accepts a context (null takes 'context' position and is arbitrary in this use case)
  result.push(Math.max.apply(null, arr)) //followed by an array of arguments to be used inside the Math function apply was called on 

  //alt ES6 syntax is Math.min(...arr) and Math.max(...arr)
  return result
}

// Deeper dive with Math.min and Math.max
// Use as boundary/clip tool
function clip(num, limit) {
  if (num > limit) { 
    num = limit //return lowest value
  }
  return num
}

function clipWithMin(num, limit) {
  return Math.min(num, limit) //return lowest value
}

// Both only accept list of comma separated values, not arrays
function getMin(array) { 
  return Math.min(...array) //accepts list of numbers, not arrays by default so need to spread
}

function getMax(array) {
  return Math.max(...array)
}

// Get min & max without Math.min() or Math.max()
function getMinMax(arr) {
  let min = arr[0]
  let max = arr[0]
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }

    if (arr[i] > max) {
      max = arr[i]
    }
  }

  return [min, max]
}

// Determine if given date is Dec 24
function isDec24(dateObj) {
  // months are 0 - 11, Jan = 0 & Dec = 11; getMonth()
  // dates are 1 - 31; getDate()
  // days of week are 0 - 6; Sun = 0; getDay()
  return dateObj.getMonth() === 11 && dateObj.getDate() === 24
}

// Check if array can be nested in another
function isNestable(arr1, arr2) {
  let arr1Min = Math.min(...arr1),
      arr2Min = Math.min(...arr2),
      arr1Max = Math.max(...arr1),
      arr2Max = Math.max(...arr2)

    return arr1Min > arr2Min && arr1Max < arr2Max
}

// Check if given 2-digit num is largest possible if digit order is switched
const largestSwitch = num => {
  let digits = num.toString().split("")
  let swap = parseInt(digits[1].concat(digits[0]))

  return num > swap
}

// Calculate number of squares in an n * n grid
const squarePyramidalNumber = n => {
  return n * (n + 1) * (2 * n + 1)/6
}