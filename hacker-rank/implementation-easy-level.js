//round grades according to given set of rules
function roundGrade(grades) {

  return grades.map(grade => {
    if (grade >= 38 && grade % 5 > 2) {
      return Math.ceil(grade/5)*5 //round up to nearest multiple of 5
    } else {
      return grade
    }
  })
}

/* Math.ceil(num/3)*3 would round num up to nearest multiple of 3
If num is not divisible by 3, num/3 would result in a decimal because
there would be a remainder left over.
Math.ceil(num/3) rounds this decimal value up to the nearest whole number,
which is the factor we need to generate the next closest multiple of 3.
*/

//inclusive range challenge
function countInclusive(s, t, a, b, aDistances, bDistances) {
  const inRangeCount = arr => {
    return arr.filter(num => num >= s && num <= t).length
  }

  let aXAxisValues = aDistances.map(distance => {
    return distance + a 
  })

  let bXAxisValues = bDistances.map(distance => {
    return distance + b
  })

  console.log(inRangeCount(aXAxisValues));
  console.log(inRangeCount(bXAxisValues));
}

//find where two moving objects move to same point given starting point and velocity, if at all
function doTheyMeet(x1, v1, x2, v2) {
  if (v2 >= v1) {
    return "NO"
  } 

  if (x1-x2 % v2-v1 === 0) {
    return "YES"
  } 
}



/*return element with highest frequency; if elements share frequency, 
return element with lowest value */
function getFrequencyV1(arr) {
  let type1 = {type: 1, frequency: 0}
  let type2 = {type: 2, frequency: 0}
  let type3 = {type: 3, frequency: 0}
  let type4 = {type: 4, frequency: 0}
  let type5 = {type: 5, frequency: 0}
  
  arr.forEach(num => {
      if (num === type1.type) {
          type1.frequency++
      } else if (num === type2.type) {
          type2.frequency++
      } else if (num === type3.type) {
          type3.frequency++
      } else if (num === type4.type) {
          type4.frequency++
      } else {
          type5.frequency++
      }
  })
  
  let frequencies = [type1, type2, type3, type4, type5]
  let sortedFreq = frequencies.sort((a,b) => {
      if (a.frequency < b.frequency) {
          return 1;
      }
      if (a.frequency > b.frequency) {
          return -1;
      }
      return 0;
  })

  // [{type: 3, frequency: 5}, {type: 1, frequency: 5}, {type: 2, frequency: 2}]
  let maxList = [sortedFreq[0]]
  sortedFreq.forEach((obj, index) => {
      if (obj.frequency === maxList.frequency) {
          maxList.push(obj)
      }
  })
  
  let sortedTypes = maxList.sort((a,b) => {
      if (a.type > b.type) {
          return 1;
      }
      if (a.type < b.type) {
          return -1;
      }
      return 0;
  })
  
  return sortedTypes[0].type
}


//refactor getFrequency function
function getFrequencyV2(arr) {
  let frequencies = Array(6).fill(0) 
  /*need to set initial values otherwise will result in NaN values when we try
  to add to it (also empty 1st value) */

  arr.forEach(num => {
    frequencies[num]++
  })

  // first index frequencies[0] is empty placeholder

  let max = 0
  for (let i = 1; i < frequencies.length; i++) {
    if(frequencies[i] > frequencies[max]) {
      max = i
    }
  }

  return max
}


function brokenRecordCount(scores) {
  let leastPoints = scores[0]
  let mostPoints = scores[0]
  let count = [0, 0] // [most, least]

  for (let i = 1; i <= scores.length; i++) {
    let score = scores[i]

    if (score < leastPoints) {
      leastPoints = score
      count[1]++
    } else if (score > mostPoints) {
      mostPoints = score
      count[0]++
    }
  }

  return count
}

//find number of subarrays that meet given criteria
function subarrays(arr, d, m) {
  let count = 0
  //m = segment contains m elements
  //d = ints in segment must sum to equal d

  for (let i = 0; i <= (arr.length - m); i++) {
    let segment = arr.slice(i, (i + m))
    let sum = segment.reduce((accum, currentValue) => {
      return accum + currentValue
    })
    if (sum === d) count++
  }

  return count
}


/* 
Find pairs that match given criteria
Inputs:
total = positive int
arr = array of ints

Return:
# of pairs where one int precedes the other in the array
& their sum is equal to k

pairs don't have to be adjacent
*/
function findValidPairs(total, arr) {
  let count = 0

  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let isDivisible = (arr[i] + arr[j]) % total === 0
      if (isDivisible) count++
    }
  }

  return count
}


/*
Time Machine
Inputs: y = year

Return: 256th day in dd.mm.yyyy format as string
*/

function get256Date(y) {
  //figure out which calendar system we're using
  //then figure out if it's a leap year according to that system
  //if leap year, then subtract 1 from day of month

  let day = 13

  if (y < 1917) {
    //Julian
    if (y % 4 === 0) day = 12
  } else if (y === 1918) {
    //Feb 14 = day 32
    day = 26
  } else {
    //Gregorian
    if (y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)) {
      day = 12
    }
  }

  return `${day}.09.${y}`
}

//print 'correct' or the difference to be paid based on input values
function calculateBill(bill, k, b) {
    
  let totalToSplit = bill.reduce((total, currentPrice) => {
      return total + currentPrice
  }) - bill[k]
  
  let diff = b - totalToSplit/2
  return diff === 0 ?  "Correct" : diff
}


/* given array of integers, return total number of pairs (same int value)
that can be made from the array */

function findPairs(n, ar) {
  // create an object to track frequency of each number
  // iterate over array and track the frequency
      //if num is already in object, increase count by one
      //if num isn't present, set count to one
  //create a variable to hold the total pair count
  //iterate over the frequencies object - for each key/value pair,
      //calculate the Math.floor of the value / 2 to get # of pairs
      //add this pair count to the total pair count amount
  //return total pair count
  
  let map = {}
  
  for (let i = 0; i < ar.length; i++) {
      let num = ar[i]
      if (map[num]) {
          map[num]++
      } else {
          map[num] = 1
      }
  }

  let totalCount = 0
  for (let num in map) {
      totalCount += Math.floor(map[num]/2)
  }
  
  return totalCount
}