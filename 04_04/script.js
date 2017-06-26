function findBiggestFraction(a,b) {
		let result;
    a > b ? result = ["First fraction", a ] : result = ["Second Fraction", b];
    return result;
}

let firstFraction = 3/4;
let secondFraction = 5/7;

let fractionResults = findBiggestFraction(firstFraction,secondFraction);
console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log("Fraction: " + fractionResults[0] + " with a value of " + fractionResults[1] + " is the biggest.")

