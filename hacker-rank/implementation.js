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