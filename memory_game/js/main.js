let cards = ["queen", "king", "queen", "king"];
let cardsInPlay = [];

let card1 = cards[0];
let card2 = cards[2];

cardsInPlay.push(card1);
console.log("You flipped a " + cardsInPlay[0]);

cardsInPlay.push(card2)
console.log("You flipped a " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	};
};