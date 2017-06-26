let confirmButton = window.confirm('Click OK, get true.  Click cancel, get false.');

if(confirmButton === true) {
	console.log("True has been chosen: ", confirmButton);
} else {
	console.log ("Why did you choose false: ", confirmButton);
}


let answerPrompt = window.prompt('Type YES, NO, or MAYBE.  Then click OK.').toLowerCase();

if(answerPrompt === "yes") {
	console.log("Your answer: ", answerPrompt);
} else if (answerPrompt === "maybe") {
		console.log("Your answer: ", answerPrompt);
} else if (answerPrompt === "no") {
		console.log("Your answer: ", answerPrompt);
} else {
	console.log("You did not select a response from the prompt, refresh and try again.");
}

document.querySelector("#h4").innerHTML = "Check console";
// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/if...else