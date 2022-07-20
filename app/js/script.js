/*
Detect keypresses
    - if keypress is a letter
      - update "letters" attribute
        - update the tile markup based on "letters" value
    - if keypress is backspace
      - delete last letter in "letters"
        - update tile markup based on "letters" 
*/


document.addEventListener("DOMContentLoaded", () => {  

    console.log("are we here");
const lettersPattern = /[a-z]/;
let currentGuessCount = 0;
let currentGuess = document.querySelector('.guess' + currentGuessCount);
console.log(currentGuess)
let matches = document.querySelectorAll('div.guess');
console.log(matches);

//detect keypress (letter/backspace/other)
document.addEventListener('keydown', (e) => {
    console.log('keypress:' + e.key);

    //if letter, do this
    console.log(currentGuess);
    const key = e.key;
    if (currentGuessCount < 6){
        if (key.length == 1 && 
            lettersPattern.test(key)
            ) {
                console.log("updating guess with:" + key);
               updateLetters(key);
               
            } else if (key == 'Backspace') {
                deleteFromLetters();
            }
    }

    //if backspace, do this
})

const deleteFromLetters = () => {
    let oldLetters = currentGuess.dataset.letters;
    let newLetters = oldLetters.slice(0, -1);
    currentGuess.dataset.letters = newLetters;
    console.log(currentGuess.dataset.letters);
}

const updateLetters = (letter) => {
    let oldLetters = currentGuess.dataset.letters;
    let newLetters = oldLetters + letter;
    let currentTile = newLetters.length;
    currentGuess.dataset.letters = newLetters;
    console.log(currentGuess.dataset.letters);
    // updateTiles(currentTile, letter);
  };

//update "letters"

//Update tilemarkup

//delete last letter

})