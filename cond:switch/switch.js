let answerPrompt = window.prompt('Type YES, NO, or MAYBE.  Then click OK.').toLowerCase();
//break must be included or they cascade down, and will keep going until it hits the break.

switch(answerPrompt) {
	case "yes":
		console.log("Your answer: ", answerPrompt);
		break;
	case "maybe":
		console.log("Your answer: ", answerPrompt);
		break;
	case "no":
		console.log("Your answer: ", answerPrompt + ",", " Why no? ='( " );
		break;
	default:
		console.log("You have not chosen a given response, refresh and try again.");
}

document.querySelector("#h4").innerHTML = "Check console after your answer to the prompt."

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/switch