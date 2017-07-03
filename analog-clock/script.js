const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let date = new Date();

console.log(date);

let hour = date.getHours();
let minute = date.getMinutes();
let seconds = date.getSeconds();

let hourHandPosition = hour*360/12+(minute*(360/60)/12);
let minuteHandPosition = (minute*360/60)+(seconds*(360/60)/60);
let secondHandPosition = seconds*360/60;

function runClock(){

	hourHandPosition = hourHandPosition + (3/360);
	minuteHandPosition = minuteHandPosition + (6/60);
	secondHandPosition = secondHandPosition + 6;

	HOURHAND.style.transform = "rotate(" + hourHandPosition + "deg)";
	MINUTEHAND.style.transform = "rotate(" + minuteHandPosition + "deg)";
	SECONDHAND.style.transform = "rotate(" + secondHandPosition + "deg)";
}


let clockInterval = setInterval(runClock,1000);


