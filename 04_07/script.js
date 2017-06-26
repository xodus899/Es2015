function findBiggestFraction(a,b) {
    console.log("Fraction a: ", firstFraction);
    console.log("Fraction b: ", secondFraction);

    //local scope
    let result;

	a>b ? result = ["a",a] : result = ["b",b];
    return result;
}

//global scope
let firstFraction = 7/16;
let secondFraction = 13/25;

let fractionResult = findBiggestFraction(firstFraction,secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest.");


document.querySelector("#h4").innerHTML = "Check console"
