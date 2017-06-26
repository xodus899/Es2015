let a = 5/7;
let b = 18/25;
let num1 = 3/4;
let num2 = 5/5;


// ternary
let theBiggest = function() {
	let result;
	a > b ? result = ["a: ", a] : result = ["b: ", b];
	console.log(result);
}
theBiggest();

document.querySelector("#h4").innerHTML = "Check console";

// conditional
let theSmallest =  function() {
	let result;

	if(num1 > num2) {
		result = ["num1: ", num1];
	} else if (a < b) {
		result = ["num2 is bigger: ", num2, "num1 value was: ", num1];
	} else {
		"Neither is bigger";
	}
	console.log(result);
}

theSmallest();

// anon funtion with parameters

let theParameters = function(num3,num4) {
	if(num3 > num4) {
		console.log("num3 is bigger ", num3);
	} else if (num3 < num4) {
		console.log("num4 is bigger ", num4);
	} else {
		console.log("The numbers are the same");
	}
}

theParameters(3/4,3/5);