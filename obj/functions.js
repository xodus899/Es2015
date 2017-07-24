
function times(num1, num2, num3 ) {
    if (num3) {
      return num1 * num2 * num3;
    } else if (num2) {
      return num1 * num2;
    } else {
      return num1;
    }
}

console.log(times(2));
console.log(times(2,2));
console.log(times(2,2,2));
console.log(times(2,2,2,2));

function times(num1, num2, num3 ) {
    if (arguments.length >= 4) {
      throw new Error("Too many numbers only three are allowed");
    } else if (num3) {
      return num1 * num2 * num3;
    } else if (num2) {
      return num1 * num2;
    } else {
      return num1;
    }
   
}

console.log(times(2));
console.log(times(2,2));
console.log(times(2,2,2));
console.log(times(2,2,2,2));