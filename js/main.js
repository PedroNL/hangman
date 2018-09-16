var wordsList = ["TOYOTA", "RENAULT", "FORD", "TESLA", "HONDA", "JEEP", "LADA", "VOLKSWAGEN", "MERCEDEZ", "HYUNDAI", "VOLVO", "JAGUAR", "CITROEN", "BMW", "CHRYSLER", "FIAT", "FERRARI", "MAZDA", "KIA", "LEXUS", "NISSAN", "MINI", "LAMBORGHINI", "DODGE", "ACURA", "CADILLAC", "BENTLEY", "AUDI", "MASERATI", "PEUGEOT", "PORSCHE", "SUBARU", "SUSUKI", "TATA"];


// var emptySpace = "_&nbsp;";
var word, userGuess, spaces, l, livesContainer, found, lives;
var alive;

// var lives = 5;
var wordToPrint = "";



function init() {
  makeVisible();
  var button = document.getElementById("button");
  var newGameBtn = document.getElementById("new-game");
  var userInput = document.getElementById("userInput"); //letter
  var livesContainer = document.getElementById("lives-container");
  document.getElementById("game-finished").innerHTML = "";
  document.getElementById("image").classList.add("hidden");
  alive = true;
  lives = 5;
  userInput.value = "";
  word = selectWord()
  console.log(word);
  spaces = new Array(word.length);
  livesContainer.innerText = "You have " + lives + " lives left";
  showHint(spaces);

  button.addEventListener("click", addLetter);
  newGameBtn.addEventListener("click", init);

}

function selectWord() {
  return wordsList[Math.floor(Math.random() * wordsList.length)].split('');
}

function showHint(spaces) { //gets an array of empty spaces
  var hint = document.getElementById("hint");
  var text = "";
  var i = 0;

  for (i = 0; i < spaces.length; i++) {
    if (spaces[i] != undefined) {
      text += spaces[i] + " ";
    } else {
      text += " _ ";
    }
  }
  hint.innerText = text;

}

function addLetter() {
  var letter = userInput.value;
  userInput.value = "";
  userInput.focus();
  if (isLetter(letter)) {
    showWord(word, letter);
  } 
}


function showWord(word, letter) {
  var livesContainer = document.getElementById("lives-container");
  var found = false;
  var i;
  letter = letter.toUpperCase();
  for (i in word) {
    if (letter == word[i]) {
      spaces[i] = letter;
      found = true;
    }
  }
  showHint(spaces);

  if (!found) {
    lives--;
    livesContainer.innerHTML = "Lives left: " + lives;
  } 

  checkGame(word, spaces);
}

function checkGame(word, spaces) {
  var game = document.getElementById("game-finished");
  var img = document.getElementById("image");
  var x = 0;
  if (lives < 1) {
    alive = false;
    word = word.join("");
    game.innerHTML = "GAME OVER</br> The word was: " + word;
  } else {
    if (spaces.includes(undefined)) {
      alive = true;
    } else {
      alive = false;
      // window.location.replace("wonPage.html");
      game.innerHTML = "YOU WON";
      img.classList.remove('hidden');
      document.getElementById("button").classList.add("hidden");
      document.getElementById("userInput").classList.add("hidden");
    }
  }

}

function isLetter(letter) {
   var letters = /^[A-Za-z]+$/;
   if(letter.match(letters))
     {
      return true;
     }
   else
     {
     alert("ONLY LETTERS ALLOWED");
     return false;
     }
  }


function makeVisible () {
  document.getElementById("button").classList.remove("hidden");
  document.getElementById("userInput").classList.remove("hidden");
}























// function newGame() {
  //   reset();
  //   // select word
  //   word = selectWord(wordsList);
//   // print empty spaces
//   printWord(word);
//   // inputField.style.visibility = "visible";
//   // livesContainer.style.visibility = "visible";
//   inputField.addEventListener('keyup', function() {
//     if (event.which === 13) {
//       userGuess = inputField.value.toUpperCase();
//       usedLetters.push(userGuess);

//       inputField.value = "";
//       console.log(userGuess);

//       // checkLetter(userGuess, word);
//       // check if letter in word to guess
//       // checkLetter(userGuess, word);
//     }
//   });
// }

// function selectWord(words) {
//   return wordsList[Math.floor(Math.random() * wordsList.length)].split('');

// }

// function printWord(word) {
//   for(var i in word){
//     var template = `<div class="letter"><span class="hidden">${word[i]}</span></div>`;
//     wordContainer.innerHTML += template;
//   }; 
//   console.log(wordContainer);
// }

// if (letter in word) {

// } else {

// }

// function checkLetter(letter) {
//   if (word.includes(letter)) {
//     wordContainer.innerHTML = "";

//     // printLetter(letter, word);
//   } else {
//     guessesLeft -= 1;
//     console.log(guessesLeft);
//   }
//   // console.log(letter);
//   // console.log(word);
// }

// function reset() {
//   wordContainer.innerHTML = "";
//   inputField.style.visibility = "hidden";
//   guessesLeft = 5;
// }

// function printSpaces(word) {
//   word.forEach(element => {
//     wordContainer.innerHTML += emptySpace;
//   });
// }


// function printLetter() {
//   for(var i in word){
//     var template = `<div class="letter"><span class="hidden">${word[i]}</span></div>`;
//     wordContainer.innerHTML += template;
//     console.log(wordContainer);

//   };  
// }



// function printWord(word) {
// }


// function printLetter(letter, word) {
//   let palabra = inputField.innerHTML;
//   word.forEach(element => {
//     if (letter === element) {
//       wordToPrint += letter + " ";
//     } else {
//       wordToPrint += emptySpace;
//     }
//     wordContainer.innerHTML = wordToPrint;

//   });

// }




// let messages = {
//   win: 'You win!',
//   lose: 'Game over!',
//   guessed: ' already guessed, please try again...',
//   validLetter: 'Please enter a letter from A-Z'
// };

// function isLetter(letter)
//   {
//    var letters = /^[A-Za-z]+$/;
//    if(letter.value.match(letters))
//      {
//       return true;
//      }
//    else
//      {
//      alert("Please only letters");
//      return false;
//      }
//   }


