//ternary
let theBiggest = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
})(1/2,3/4);

console.log(theBiggest);


document.querySelector("#h4").innerHTML = "Check console";

//conditional
let theConditional = function(a,b) {
	let result;
	if(a > b) {
		result = ["a", a]
	} else if (a < b)  {
		result = ["b", b];
	} else {
		"They're equal";
	}
	return result;
}
console.log(theConditional(1/2,3/4));
// console.log(theSmallest);




