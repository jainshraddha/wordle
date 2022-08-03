/*
Detect keypresses
    - if keypress is a letter
      - update "letters" attribute
        - update the tile based on "letters" value
    - if keypress is backspace
      - delete last letter in "letters"
        - update tile based on "letters" 
*/
let words = ['apple', 'baker', 'store', 'horse', 'speak', 'clone', 'bread'];
let solutionWord = '';

const chooseWord = () => {
  // choose random item from words array
  let randomItem = Math.floor(Math.random() * (words.length - 1)) + 1;
  solutionWord = words[randomItem];
};


document.addEventListener("DOMContentLoaded", () => {  
chooseWord();
const lettersPattern = /[a-z]/;
let currentGuessCount = 1;
let currentGuess = document.querySelector("#guess" + currentGuessCount);

//detect keypress (letter/backspace/other/enter)
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (currentGuessCount < 7){
        if (key.length == 1 && 
            lettersPattern.test(key) &&
            currentGuess.dataset.letters.length < 5
            ) {
               updateLetters(key);
               
            } else if (key == 'Backspace') {
                deleteFromLetters();
            } else if (key == 'Enter' && currentGuess.dataset.letters.length == 5){
              submitGuess();
            }
    }
})

const deleteFromLetters = () => {
    let oldLetters = currentGuess.dataset.letters;
    let newLetters = oldLetters.slice(0, -1);
    currentGuess.dataset.letters = newLetters;
    console.log("current guess: "+currentGuess.dataset.letters);
    deleteFromTiles(oldLetters.length);
}

// Backspace -- Delete last tile markup
const deleteFromTiles = (tileNumber) => {
  // remove markup from last tile
  //console.log('deleteFromTiles = ' + tileNumber);
  let currentTile = document.querySelector(
    '#guess' + currentGuessCount + 'Tile' + tileNumber
  );
  currentTile.innerText = '';
  currentTile.classList.remove('has-letter');
};



const updateLetters = (letter) => {
    let oldLetters = currentGuess.dataset.letters;
    let newLetters = oldLetters + letter;
    let currentTile = newLetters.length;
    currentGuess.dataset.letters = newLetters;
    console.log("current guess: "+currentGuess.dataset.letters);
    updateTiles(currentTile, letter);
  };


//Update tile
const updateTiles = (tileNumber, letter) => {
  //console.log('updateTiles(' + tileNumber, letter + ')');
  let currentTile = document.querySelector(
    '#guess' + currentGuessCount + 'Tile' + tileNumber
  );
  currentTile.innerText = letter;
  currentTile.classList.add('has-letter');
};

const submitGuess = () => {
  //console.log('submit guess');
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      revealTile(i, checkLetter(i));
    }, i * 200);
  }
};


const checkLetter = (position) => {
  //console.log('checkLetter');
  let guessedLetter = currentGuess.dataset.letters.charAt(position);
  let solutionLetter = solutionWord.charAt(position);

  if (guessedLetter == solutionLetter) {
    return 'correct';
  }
  else {
    return solutionWord.includes(guessedLetter) ? 'present' : 'absent';
  }

};


const revealTile = (i, state) => {
  let tileNum = i + 1;
  flipTile(tileNum, state);
  checkIfGuessComplete(i);
};

const checkIfGuessComplete = (i) => {
  if (i == 4) {
    checkWin();
  }
};


const flipTile = (tileNum, state) => {

  let tile = document.querySelector(
    '#guess' + currentGuessCount + 'Tile' + tileNum
  );
  tile.classList.add(state);
};

const checkWin = () =>{

  if (solutionWord == currentGuess.dataset.letters){
     console.log("you won!!")
  } else {
    currentGuessCount += 1;
    currentGuess = document.querySelector('#guess'+ currentGuessCount);
    console.log("no, that guess is incorrect");
    if (currentGuessCount == 7){
      console.log("you lost, the solution is " + solutionWord);
    }
  }

};

})