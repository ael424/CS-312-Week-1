//this is a dice randomizer

//the next bit of code will be generating a random number for a 6 sided dice.

function RandNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

//here I would like to make sure im generating a random number for both dice
var RandNum1 = RandNumber();
var RandNum2 = RandNumber();

// The dice image elements are selected here.
var diceImages = document.querySelectorAll("img");

//now with the randomized number we want to make sure each dice is displaying the correct number on its image

function Dice (diceSRC, RandNumber) {
    var image = "images/dice" + RandNumber + ".png";
    diceSRC.setAttribute("src", image);
}

//this will finalize the dice image being updates to properly display

Dice(diceImages[0], RandNum1);
Dice(diceImages[1], RandNum2);

// Huzzah! we now can tell the winner. 

var headerText;
if (RandNum1 > RandNum2) {
    headerText = "Congrats you're number 1!";
}
else if (RandNum2 > RandNum1) {
    headerText ="Congrats number 2 is higher than 1!";
}
else {
    headerText = "You both lose try again!";
}

document.querySelector("h1").innerHTML = headerText;