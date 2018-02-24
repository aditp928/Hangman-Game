var winCount = document.getElementById("win_count");
var lossCount = document.getElementById("loss_count");
var current = document.getElementById("current_word");
var guessesLeft = document.getElementById("guesses_left");
var lettersGuessed = document.getElementById("letters_guessed");



var superHeroes = {

    listOfWords: ["batman", "superman", "robin", "nightwing", "wolverine", "deadpool", "cyborg", "cyclops", "storm", "flash", "hulk", "gambit", "beast", "magneto", "groot", "drax", "gamora", "nebula", "starlord"],

    pickedWord: '',
    guessedLetters: [],
    guessRemaining: 0,
    placeHolder: '',
    dashes: "_",
    buffer: 6,
    wins: 0,
    losses: 0,
    
    gameStart: function () {
        writeDocument();
    },

    gameReset: function () {
        this.guessedLetters = [];
        this.pickedWord = this.listOfWords[Math.floor(Math.random() * this.listOfWords.length)];
        this.guessRemaining = this.pickedWord.length + this.buffer;
        this.placeHolder = this.dashes.repeat(this.pickedWord.length);
        console.log("current word: " + this.pickedWord);
    },

    userInput: function (letterGuessed) {

        if (this.guessedLetters.indexOf(letterGuessed) == -1) {
            if (this.pickedWord.includes(letterGuessed)) {

                var characterArray = this.placeHolder.split('');

                for (var i = 0; i < this.pickedWord.length; i++) {
                    if (this.pickedWord[i] === letterGuessed) {
                        characterArray[i] = letterGuessed;
                    }
                }
                this.placeHolder = characterArray.join('');

                if (this.pickedWord === this.placeHolder) {
                    this.wins++;
                    alert("You're Right! " + " The word was: " + this.pickedWord);
                    this.gameReset();
                }

            } else {
                this.guessedLetters.push(letterGuessed);
                this.guessRemaining--;

              

                if (this.guessRemaining == 0) {
                    alert("You lose! " + " The word was: " + this.pickedWord);
                    this.gameReset();
                }
            }

            writeDocument();

        }

    }

};

superHeroes.gameReset();

superHeroes.gameStart();

function writeDocument() {
    winCount.textContent = superHeroes.wins;
    lossCount.textContent = superHeroes.losses;
    current.textContent = superHeroes.placeHolder.split('').join(" ");
    guesses_left.textContent = superHeroes.guessRemaining;
    lettersGuessed.textContent = superHeroes.guessedLetters.join(" ");
}



document.onkeyup = function (event) {

    var characterGuess = event.key;

    superHeroes.userInput(characterGuess);
}