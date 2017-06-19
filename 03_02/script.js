// Data types - numeric, boolean, null, string, undefined, and symbol but is not used here.

let negInteger = -3.14159265359;
let escQuote = "Quotes can also be \"escaped\".";
let theSunIsWarm = true;
let emptyInside = null;
let justAnotherVariable;

// this will check the type the variable is.
console.log(typeof theSunIsWarm);

document.body.innerHTML = "<h1> The data type is " + (typeof escQuote) + " for: " + escQuote + "</h1>";
document.body.innerHTML = "<h2> The data type is " + (typeof negInteger) + " for: " + negInteger + "</h2>";

