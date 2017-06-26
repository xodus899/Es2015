/* es2015
	- const
		- constant
		-cannot be changed once defined
	- let
		-block scope variable
		-smaller scope than var
*/


// try to redefine myConstant =D
const myConstant = 5;
console.log(myConstant);

function logScope() {
	let localVar = 2;
	if(localVar) {
		let localVar = "I'm different";
		console.log("nested localVar:", localVar);
	}
	console.log("logScope localVar: ",localVar);
}

logScope();






document.querySelector("#h4").innerHTML = "Check console";