//Check if number is prime
function isPrime(num) {
  for (let i = 2; i <= num/2; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

//Get greatest common divisor recursive
function gcd(x, y) {
  console.log("external")
  if (y === 0) {  //base case
    console.log(`base case hit`)
    return x
  } else {
    //gcd(x, y) = gcd(y, remainder) so update values and call again until value is returned by base case
    return gcd(y, (x % y))  //x % y will return 0 if x is 0, which will trigger the base case 
  }
}

//GCD with While loop
function gcdWhile(x, y) {
  let remainder
  while ((x % y) > 0) { //if x % y === 0 then divisor has been found
    remainder = x % y;
    x = y; 
    y = remainder;
  }
  return y
}