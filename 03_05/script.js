// const is used so the value cannot be changed while checking for equality. Try changing the equality to one equal sign.
// two equal signs is not as strict. a string will be the same value ex: 5, "5" are the same with two.
// three equal signs will not allow 5, "5". it has to match exactly.

const a = 5;
const b = 5;
let theNumbersMatch

if ( a === b ) {
	theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log("The numbers match: ",theNumbersMatch);


// ternary operator

a == b ? console.log("Match") : console.log("No match");
