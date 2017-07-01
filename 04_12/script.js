function doSomeMath() {
	let a = 5;
	let b = 4;
	let sum = a + b;

	return sum;
}

let theResult = doSomeMath();

console.log("The result: ", theResult);

function doSomeMoreMath() {
	let c = 3;
	let d = 3;
	function operator() {
		let result = c + d;
		return result;
	}
	return operator;
}

let theAnswer = doSomeMoreMath();
console.log(theAnswer());


document.querySelector("#h4").innerHTML = "Check console for closures";


function giveMeEms(pixels) {
	let base = 16;

	function doMath() {
		return pixels/base;
	}

	return doMath;
}

let smallSize = giveMeEms(12);
let mediumSize = giveMeEms(18);
let largeSize = giveMeEms(24);
let extraLargeSize = giveMeEms(36);

console.log("This is the CSS ems for pixels 12,18,24,and 36");
console.log("Small size:", smallSize());
console.log("Medium size:", mediumSize());
console.log("Large size:", largeSize());
console.log("Extra large size:", extraLargeSize());
