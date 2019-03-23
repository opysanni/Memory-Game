/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard, firstCardClicked, secondCardClicked;
let lockClickedCards = false;
let lockAllCards = false;
$span = document.querySelector('span');

    function flipCard() {
        if (lockClickedCards) return;
        if (this === firstCard) return; 
        // if (lockAllCards) return;


      this.classList.toggle('open');
      this.classList.toggle('show');

      if (!hasFlippedCard) {
        // first click

        hasFlippedCard = true; 
        firstCard = this;
        increment();
                
        
        return;
      } 

      else {
        // second click
        hasFlippedCard = false;
        secondCard = this;
        // cardLock();
        
        checkMatch();
        increment();
        

    }
}

    function checkMatch(){
        if (firstCard.dataset.list === secondCard.dataset.list) {  
        firstCard.classList.toggle('match');
        secondCard.classList.toggle('match');
        // console.log(firstCard.classList);
        // console.log(secondCard.classList);


        stopClick();
    }

    else { hideCards()
        


    }
}

    function stopClick(){

        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        
    
    } 
     

    function hideCards(){
        lockClickedCards = true;
    

                setTimeout( () => {
        
                   
        firstCard.classList.toggle('open');
        secondCard.classList.toggle('open');
        firstCard.classList.toggle('show');
        secondCard.classList.toggle('show');
         firstCard = null;
       secondCard = null;

            lockClickedCards = false;
           
    }, 1000);
   }
 
    function increment(){
        $span.innerHTML++;
    }   
  
// card clicks
cards.forEach(card => card.addEventListener('click', flipCard));

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();

// page reload function
 



