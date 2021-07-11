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