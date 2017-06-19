let a = 5;
let b = 4;
let sum = a + b;

let c = 4;
let d = "5";
let total = c + d;
let sub = c - d;

console.log(a, "this is a", typeof a);
console.log(b, "this is b " ,typeof b);
console.log(sum, "value of a + b ");
// because one is a string Javascript will work as a string operator. this will return "45";
console.log(c, "this is a", typeof c);
console.log(d, "this is b ",typeof d);
console.log(total, "value of c + d ", typeof total);

// if you do a subtraction this will subtract. it is sloppy but will work

console.log(sub, "subtraction of a number and string.");

document.body.innerHTML = "<h1> Check the console </h1>"


