function delay( time, type, callback) {
	let newTime;
	if ( type === "s") {
		newTime = time * 1000;
	} else {
		newTime = time;
	}
	setTimeout( () => {
		callback(time,type);
	},newTime);
}

delay(5000,"ms", (time, type) => {
	console.log("Time:" + time, "Type:" + type);
 });

function delay(time,callback) {
	setTimeout( () => {
		callback();
	},time * 2000);
}

delay(2, () => {
	getWeatherByZip(33024, (zipCode) => {
		delay(1, () => {
			console.log(zipCode);
		})
	});
});

function getWeatherByZip(zipCode,callback) {
	setTimeout( () => {
		callback(zipCode);
	},1000);
}
getWeatherByZip(zip, areaCode);

function areaCode(zip) {
	console.log(zip);
}

function randomNumber(callback) {
	if (typeof callback !== "function") {
		console.log("needs callback");
		return;
	}
	setTimeout( () => {
		callback(Math.random());
	},1000);
}
randomNumber();

function onRandomNumber(number) {
	console.log(number);
}

function delay(time,callback) {
	setTimeout(callback, time * 1000);
}
delay(2, () => { 
	console.log("hi") ;
	delay(1, () => {
		console.log("ho");
		delay(1, () => {
			console.log("it's off to work i go");
		});
	});
});

function delay(time,callback) {
	setTimeout(callback, time * 1000);
}
delay(2, () => { 
	console.log("hi") ;
	delay(1, () => {
		console.log("ho");
		delay(1, () => {
			console.log("it's off to work i go");
		});
	});
});

callback, number * 2
function values(number1,number2,callback) {

}

values(1,2, sum );


function sum(n1,n2,callback){
	callback(n1 + n2);
}
sum(1,2, (total) => {
	console.log(total);
});

function isNum(value,callback) {
	if (typeof value === "number") {
		callback(null,value);
	} else {
		callback("Number must be given."); 
		
	}
}

isNum(1,(err,data) => {
	if(err) {
		console.log(err);
	} else {
		console.log(data);
	}
});

function isNum(value,pass,fail) {
	if (typeof value === "number") {
		pass(value)
	} else {
		fail("Number must be given."); 
		
	}
}

isNum(1, (passValue) => { 
	console.log(passValue);
}, 
(failError) => { 
	console.log(failError); 
});

function isNum(options) {
	if (typeof options.value === "number") {
		if (typeof options.pass === "function"){
			options.pass(options.value);
		}
	} else {
		if (typeof options.fail === "function"){
			options.fail("This did not pass");
		}
	}
}

isNum( { 
	value: "1", 
	fail: (error) => {console.log(error)},
	pass: (pass) => {console.log(pass)}
});
