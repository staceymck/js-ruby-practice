//Given a string L representing a letter and a string N representing a newspaper,
//return true if the L can be written entirely from N and false otherwise.
//The letter includes only ascii characters.

//Question - do I need to account for spaces?

function letterClippings(l, n) {
  
  let letterArr = l.split("")
  let newsArr = n.split("")

  for (let i = 0; i < newsArr.length; i++) { //O(l)
    if (letterArr[i] !== " ") {
      let index = newsArr.indexOf(letterArr[i]) //O(n)
      if(index === -1) {
        return false
      } else {
        newsArr.splice(index,1)
      }
    }
  }

  return true
}


//forEach does not work for this
//you can only break a forEach by throwing an exception
function letterClippings(l, n) {
  
  let letterArr = l.split("")
  let newsArr = n.split("")

  letterArr.forEach(l => {
    if (l !== " ") {
      let i = newsArr.indexOf(l)
      if(i === -1) {
        return false //a return statement inside a forEach statement does NOT exit the function
      } else {
        newsArr.splice(i,1)
      }
    }
  })

  return true
}