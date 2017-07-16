var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()* 5 + 1);
var totalDamage += totalDamage + damageThisRound;

while (slaying) {
	if (youHit === true) {
		console.log("The dragon has been hit!" + " " + youHit);
		if (totalDamage >= 4) {
			console.log("The dragon has been slained!" + " " + totalDamage)
		}
	} else {
		console.log ("You have been defeated!" + " " + totalDamage);
	}
	slaying = false;
}
