let cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"	
},
{
rank: "queen"
suit: "diamonds"
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king"
suit: "hearts"
cardImage: "images/king-of-hearts.png"
},
{
rank: "king"
suit: "diamonds"
cardImage: "images/king-of-diamonds.png" 
}];

let cardsInPlay = [];
function check4Match(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	};
};
function flipCard(cardId){
	console.log("You flipped a " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank)
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if (cardsInPlay.length === 2) {
	check4Match();
	};
};

flipCard(0);
flipCard(1);
