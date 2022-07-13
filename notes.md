# Functional Requirements

## Gameplay (Javascript)

6 tries to guess a 5-letter word

Typing in the letter will display the letter in the tile
Backspace will delete the letters
Enter will submit guess

guesses must be a real word, "in word list"
guess colors (data state):
    - gray: "absent", letter not in word
    - yellow: "present", letter in word, but in wrong position
    - green: "correct", letter in word, and in correct position

Hard mode: present or correct letters must be used in subsequent guesses

Guesses are stored in local storage 

## Design 
Tiles 5x6
Virtual Keyboard


## Interactions
When typing a letter:
    - the border of the tile changes to light gray
    - "blinking" animation when you guess
    - backspace will remove letter, and border changes back to dark gray

When submitting a guess:
    - Tiles will flip up and background color will change based on guess