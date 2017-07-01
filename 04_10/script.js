// let car1 = {
// 	make: "Pontiac",
// 	model: "G8",
// 	trim:"GXP",
// 	engine: "Ls3: 6.2L",
// 	count: 0,
// 	updateCount: function() {
// 		return ++car1.count;
// 	}
// }

// console.log(car1.count);
// car1.updateCount();
// console.log(car1.make,car1.model,car1.trim,car1.engine);
// console.log(car1.count);
// car1.updateCount();


// Using the function to turn the object above into a constructor using this since we dont know what the object is at the time.

function Car1(make,model,trim,engine,count) {
	this.make = make;
	this.model = model;
	this.trim = trim;
	this.engine = engine;
	this.count = count;
	this.updateCount = function() {
		return ++this.count;
	};
}

let firstCar = new Car1("Pontiac","G8","GXP","Ls3 6.2L",0);
console.log(firstCar);
firstCar.updateCount();
console.log(firstCar.count);

let secondCar = new Car1("Pontiac","G8","GT","L76 6.0L",0);
console.log(secondCar);
secondCar.updateCount();
console.log(secondCar.count);


let cars = [
	 firstCar = new Car1("Pontiac","G8","GXP","Ls3 6.2L",0),
	 secondCar = new Car1("Pontiac","G8","GT","L76 6.0L",0)
];
console.log(cars);
console.log(cars[0].make);


document.querySelector("#h4").innerHTML = "Check console";
