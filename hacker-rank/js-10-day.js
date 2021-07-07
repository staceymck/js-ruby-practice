function vowelsAndConsonants(string) {
  const vowels = ["a", "e", "i", "o", "u"]
  
  for (let letter of string) {
    if (vowels.includes(letter)) {
      console.log(letter)
    }
  }

  for (let letter of string) {
    if (!vowels.includes(letter)) {
      console.log(letter)
    }
  }
}



function getArea(length, width) {
  return length * width
}



function getPerimeter(length, width) {
  return length * 2 + width * 2
}



function factorial(n) {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}



function circleAreaAndCircumference(radius) {
  const PI = Math.PI
  console.log(PI * Math.pow(radius, 2))
  console.log(2 * PI * radius)
}



function getGrade(score) {
  let grade;

  if (score > 25 && score <= 30) {
      grade = "A"
  } else if (score > 20 && score <= 25) {
      grade = "B"
  } else if (score > 15 && score <= 20) {
      grade = "C"
  } else if (score > 10 && score <= 15) {
      grade = "D"
  } else if (score > 5 && score <= 10) {
      grade = "E"
  } else {
      grade = "F"
  }

  return grade;
}



//Not a good use of switch but required for example
function getLetter(s) {
  let letter;
  switch (s[0]) {
    case "a" || "e" || "o" || "i" || "u":
      letter = "A";
      break;
    case "b" || "c" || "d" || "f" || "g":
      letter = "B"
      break;
    case "h" || "j" || "k" || "l" || "m":
      letter = "C"
      break;
    default:
      letter = "D"
  }
  return letter;
}



//Only works if no duplicate numbers in the nums array
function getSecondLargest(nums) {
  if (nums.length === 1) {
    return nums[0]
  }

  let sorted = nums.sort()
  return nums[nums.length - 2]
}



//Note:
//let max = Math.max.apply(null, arrayOfNums) 
//returns the max in the arrayOfNums



//Accounts for duplicates
function getSecondLargest(nums) {
  if (nums.length === 1) {
    return nums[0]
  }

  let uniqueNums = [...new Set(nums)] //create set to remove duplicates and convert back to array
  
  //Need to pass callback to sort in order to sort numbers
  let sorted = uniqueNums.sort(function(a, b) {
    return a - b
  })

  if (sorted.length === 1) {
    return sorted[0]
  }

  return sorted[sorted.length - 2]
}



//Count objects in an array that meet given condition
function count(objects) {
  let count = 0;

  objects.forEach(obj => {
    if (obj.x == obj.y) {
      count += 1;
    }
  })
  
  return count;
}



//Reverse string and catch exceptions
function reverseString(s) {
  let string = s
  try {
    string = s.split("").reverse().join("")
  }
  catch (error) {
    console.log(error.message);
  }
  finally {
    console.log(string)
  }
}



//Handling errors - used most with user input or data from other sources
let json = '{"language": "JavaScript"}';

try {
  let course = JSON.parse(json);
  if (!course.name) {
    throw new SyntaxError("Incomplete data: no name"); //pass in message to be logged
  }
  console.log(course.name)
} catch (error) {
  console.log("JSON Error: " + error.message)
}



//Currying function
//Supports declarative language in functional programming
function multiply(a, b, c) {
  return a * b * c
}

function curriedMultiply(a) {
  return function(b) {
    return function(c) {
      return multiply(a, b, c)
    }
  }
}

//alt structure: const curriedMultiply = a => b => c => multiply(a, b, c)
//curriedMultiply(2)(3)(3) = 18

const result = curriedMultiply(2)(3)(4) //24


//async await sample - async/await reduces need to chain .then() statements
//async keyword wraps a function in a promise and resolves its value
//add await keyword to funciton calls that return promise calls and let you store 
//result of fullfilled promise in a variable
const apiUrl = "https://api.wheretheiss.at/v1/satellites"

//fetch with async - await
const getISS = async () => {
  const response = await fetch(apiUrl); //await is only available inside an async function
  const data = await response.json();
  
  return data;
}



//fetch with .then chain
const getISSData = () => {
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    console.log(error)
  })
}



//throw custom errors
function isPositive(num) {
  if (num > 0) return "YES"

  if (num === 0) {
    throw new Error("Zero Error")
  } else if (num < 0 ) {
    throw new Error("Negative Error")
  }
}



//class declaration
class Triangle {
  constructor(sides) {
      this.sides = sides
  }
  
  getPerimeter() {
      return this.sides.reduce((total, currentSide) => {
          return total + currentSide
      })
  }
}
//const tri = new Triangle(25, 25)
//tri.getPerimeter()



//double even numbers, triple odd
function doubleTriple(nums) {
  return nums.map(num => {
    if (num % 2 === 0) {
      return num * 2
    } else {
      return num * 3
    }
  })
}



//given date, return day of week
function getDay(date) {
  return new Date(date).toLocaleString('en-us', {weekday: 'long'})
}



//option 2
function getDay(date) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]

  let dayIndex = new Date(date).getDay()
  return days[dayIndex]
}



//find strings that start and end w/ same vowel
//first match set before | accounts for single letter entries
const regEx = /^[aeiou]$|(^[aeiou]).+\1$/

//console.log(regEx.test("aba")) 
//true



//find strings that start with title abbreviation followed by one or more letters 
const regEx = /(^Mrs|Ms|Mr|Dr|Er)\.[a-zA-Z]+$/



//match every integer in a string
function getIntegers(string) {
  return string.match(/\d+/g)
}



//tagged template literals
//Argument: `The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`
function getSides(strings, ...expressions) {

    let area = expressions[0];
    let perimeter = expressions[1];

    let s1 = (perimeter - Math.sqrt(Math.pow(perimeter, 2) - 16 * area)) / 4
    let s2 = (perimeter + Math.sqrt(Math.pow(perimeter, 2) - 16 * area)) / 4

    return [s1, s2]
}

//create a counter button
const button = document.createElement('button')
button.id = "btn"
button.innerText = "0"
document.body.appendChild(button)
button.addEventListener('click', e => {
  let currentValue = parseInt(e.target.innerText)
  button.innerText = currentValue + 1
})