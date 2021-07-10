//Write a function that accepts any positive number between 1-1000
//and returns the sum of all numbers from 1 to that num

function addUp(num) {
  let sum = 0;
  for(let i = 1; i <= num; i++ ) {
    sum += i;
  }
  return sum
}

addUp(4) // 10
addUp(13) //91

//alt solution
function addUpTo(num) {
  return n * (n + 1) / 2;
}


//Create a function that takes an integer, minutes, and converts it to seconds
function minToSec(minutes) {
  return minutes * 60
}

minToSec(3) //180
minToSec(2) //120


//Matchstick houses
//input will always be non-negative int

function matchstickHouses(num) {
  if (num === 0 ) return 0;
  
  let total = 6;
  for (let i = 2; i <= num; i++) {
    total += 5
  }

  return total
}

//Mimic left shift operation (multiplication by power of two)
function leftShiftMimic(x, y) {
  if (y === 0) return 0;

  let multiplier = 1;
  while (y > 0) {
    multiplier = multiplier * 2
    y--
  }

  return x * multiplier
} 






