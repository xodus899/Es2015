function telephoneCheck(str) {
	let checkNumber = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
	if (str.match(checkNumber)) {
		return true
	} else {
		return false;
	}
}
console.log(telephoneCheck);
console.log("First stament tests: 555-555-5555");
console.log(telephoneCheck("555-555-5555"));
console.log("Second stament tests: 1(555)555-5555");
console.log(telephoneCheck("1(555)555-5555"))

document.querySelector("#h4").innerHTML = "Check console";