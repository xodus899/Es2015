let car1 = {
	make: "Pontiac",
	model: "G8",
	trim:"GXP",
	engine: "Ls3: 6.2L",
	count: 0,
	updateCount: function() {
		return ++car1.count;
	}
}

console.log(car1.count);
car1.updateCount();
console.log(car1.make,car1.model,car1.trim,car1.engine);
console.log(car1.count);
car1.updateCount();






document.querySelector("#h4").innerHTML = "Check console";
