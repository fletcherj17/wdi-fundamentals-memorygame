let cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"	
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png" 
}];

let score = 0;

let cardsInPlay = [];

function createBoard(){
	for(let i=0; i<cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

function createBoard2(){
	for(let i=3; i>=0; i--){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		score += 1;
		document.getElementById('info').innerText = "You found a match!";
		document.getElementById('score').innerText = `Score: ${score}`;
	} else if (cardsInPlay.length === 2 && score === 0){
		setTimeout(resetCards, 1000);
		document.getElementById('info').innerText = "Sorry, try again.";

	}
	 else {
		document.getElementById('info').innerText = "Sorry, try again.";
	};
	cardsInPlay = [];
};

function flipCard(){
	let cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("You flipped a " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank)
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if (cardsInPlay.length >= 2) {
	checkForMatch();
	};
};

document.querySelector('#start').addEventListener('click', flipAllCards);

function flipAllCards(){
	let allCards = document.getElementsByTagName('img')
	for(i=0;i<allCards.length;i++){
	let cardId = allCards[i].getAttribute('data-id');
	allCards[i].setAttribute('src', cards[cardId].cardImage);		
	};
	setTimeout(resetCards, 500);
};

document.querySelector('#reset').addEventListener('click', resetCards);

function resetCards(){
	let allCards = document.getElementsByTagName('img')
	for(i=0;i<allCards.length;i++){
	allCards[i].setAttribute('src', 'images/back.png');	
	};
	document.getElementById('info').innerText = "";
	document.getElementById('score').innerText = `Score: 0`;
	cardsInPlay = [];
	score = 0;
};
	

createBoard();
createBoard2();

