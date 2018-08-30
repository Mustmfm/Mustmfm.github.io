var button = document.getElementById("clickerbutton");
var lejonKnapp = document.getElementById("lejon");
var scoreDiv = document.getElementById("score");
var powerText = document.getElementById("powerText");
var zebraKnapp = document.getElementById("zebra");

var scoreText = document.createElement("p");

var clickValue = 1;
var bank = 0;
var lejonCost = 15;
var lejonClicks = 0;
var zebraCost = 30;
var zebra = null;
var zebraTimer = 0;

scoreText.textContent = "Points: 0";
lejonKnapp.textContent = "Lejon: " + lejonCost;
zebraKnapp.textContent = "Zebra: " + zebraCost;

button.addEventListener("click", function() {
	if (lejonClicks > 0) {
		lejonClicks--;
	} else if (lejonClicks == 0) {
		clickValue = 1;		
	}
	bank += clickValue; 
	scoreText.textContent = "Points: " + bank; 
}, true);


zebraKnapp.addEventListener("click", function() {
	if (bank >= zebraCost && zebraTimer == 0) {
		bank -= zebraCost;
		zebraTimer += 10;
		powerText.textContent = "Köpte zebra";

		
		zebra = setInterval(function() {
			bank += 10;
			scoreText.textContent = "Points: " + bank;
			zebraTimer--;

			if (zebraTimer == 0) {
				powerText.textContent = "Slut på zebra";
				clearInterval(zebra);  
			}
		}, 1000);
	} else if (zebraTimer > 0) {
		powerText.textContent = "Du har redan zebra";
	} else {
		powerText.textContent = "Du har inte råd med zebra";
	}
}, true);


lejonKnapp.addEventListener("click", function() {
	if (bank >= lejonCost) {
		clickValue *= 2;
		bank -= lejonCost;
		lejonCost *= 2;
		lejonClicks += 10;
		lejonKnapp.textContent = "Lejon: " + lejonCost;
		powerText.textContent = "Köpte lejon";
		scoreText.textContent = "Points: " + bank; 
	} else {
		powerText.textContent = "Du har inte råd med lejon";
	}
}, true);

scoreDiv.appendChild(scoreText); 