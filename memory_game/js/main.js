let cards = ["queen", "king", "queen", "king"];
let cardsInPlay = [];
function check4Match(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	};
};
function flipCard(cardId){
	console.log("You flipped a " + cards[cardId]);
	cardsInPlay.push(cards[cardId])
	if (cardsInPlay.length === 2) {
	check4Match();
	};
};

flipCard(0);
flipCard(1);