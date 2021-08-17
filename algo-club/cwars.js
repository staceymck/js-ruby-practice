// Given an array composed of two teams (1st elem belongs to team 1, 2nd to team 2, 3rd to team 1, etc.)
// Return sum of elements belonging to each team
function teamAmounts(array){
  let team1 = array[0]
  let team2 = 0
  
  for (let i = 1; i < array.length; i++) {
    if (i % 2 !== 0) {
      team2 += array[i]
    } else {
      team1 += array[i]
    }
  }
  
  return [team1, team2]
}


function triangle(row) {
  if (row.length === 1) return row[0]
  
  let color;
  let j = 1;
  let tempRow = ""
  let newRow = row
  let pair1 = ["G", "B"]
  let pair2 = ["R", "B"]
  
  while (newRow.length > 1) {
  for (let i = 0; j < newRow.length; i++) {
      if (newRow[i] === newRow[j]) {
        tempRow += (row[i])
      } else {
        if (pair1.includes(newRow[i]) && pair1.includes(newRow[j])) {
          tempRow += "R"
        } else if (pair2.includes(newRow[i]) && pair2.includes(newRow[j])) {
          tempRow += "G"
        } else {
          tempRow += "B"
        }
      }
    console.log("new row is " + tempRow)
    j++
  }
    newRow = tempRow
  }
  console.log(newRow)
  
  return color
}

 // Create a function that returns the number of integers needed to fill in gaps between numbers
 // in arr to create a consecutive list of nums
 function consecutive(arr) {
  let count = 0
  let sorted = arr.sort((a,b) => b - a)
  
  for (let i = 0; i < sorted.length - 1; i++) {
      count += (sorted[i] - sorted[i+1] - 1)
  }
  
  return count
}

// Alternative solution to consecutive() above
function consecutiveV2(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return 0
  }
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  
  let diff = max - min
  return diff - (arr.length - 2) - 1
}

// Write a function that determines if your score is better than class average
function higherThanAverage(classScoreArr, yourScore) {
  let total = classScoreArr.reduce((accum, currentTotal) => accum + currentTotal)
  let avg = total/classScoreArr.length
  
  return yourScore > avg
}


// Write a function that removes the word 'rotten' from strings in an array
function removeRotten(fruitBox){
  if (!fruitBox) return []

  return fruitBox.map(fruit => fruit.replace("rotten", "").toLowerCase())
}