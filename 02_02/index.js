let date = new Date();

alert("Today is " + date);

console.log("Today is " + date);

document.body.innerHTML = "<h1> The date today is " + date + "</h1>";

document.body.innerHTML = "<h1> The date today is " + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear + "</h1>";

document.body.innerHTML = "<h1> The date today is " + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() +  "</h1>"

document.body.innerHTML = "<h1> The date today is " + (date.getMonth() +1) + "/" + date.getDate() + "/" + date.getFullYear() + "</h1>";
"<h1> The date today is 6/18/2017</h1>"