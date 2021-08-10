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