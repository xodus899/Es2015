/* es2015
	- const
		- constant
		-cannot be changed once defined
	- let
		-block scope variable
		-smaller scope than var
		- only available to that block of code
*/


// try to redefine myConstant =D
const myConstant = 5;
console.log(myConstant);

function logScope() {
	// example of let available only to the conditional block
	var localVar = 2;

	if(localVar) {
		let localVar = "I'm different";
		console.log("nested localVar:", localVar);
	}
	console.log("logScope localVar: ",localVar);
}

logScope();






document.querySelector("#h4").innerHTML = "Check console";