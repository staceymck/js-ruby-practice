
//Get the factorial of a given number **different from factors**
//Recursive solution
function factorial(num) {
  if (num === 0 || num === 1) return 1 //base case

  return (num * factorial(num - 1)) //recursive call will trigger multiple nested calls to factorialize()
}

factorial(4)
//returns 4 * factorial(4-1)
  //returns 3 * factorial (3-1)
    //returns 2 * factorial (2-1)
      //returns 1 because hits base case

//bubbles up through nested statements: 1 * 2 * 3 * 4 = 24


//While loop solution
function factorialWhile(num) {
  if (num === 0 || num === 1) return 1

  let result = num
  while (num > 1) {
    num--
    result = result * (num)
  }
  return result
}

//For loop solution
function factorialFor(num) {
  if (num === 0 || num === 1) return 1

  for (let i = num - 1; i >= 1; i--) {
    num = num * i
  }

  return num
}