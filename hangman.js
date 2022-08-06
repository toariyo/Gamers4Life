//Variables to be Implemented
var lives = 6;
var guesses = 0;           // Count total guesses
var counter = 0;           // Count correct guesses

var showLives = document.getElementById("mylives");

// Submit button
const submitButton = document.querySelector("#submit");
const answerInputBox = document.querySelector("#userAnswer");

let randomWords = ["banana", "pear", "apple", "orange", "plum",
  "strawberry", "blueberry", "watermelon", "grape", "kiwi", "cherry", "coconut", "cranberry", "fig", "mango", "peach", "pomegranate", "pineapple", "olive", "lemon", "cantaloupe", "avocado", "apricot", "guava", "papaya", "cucumber", "blackberry", "date", "grapefruit", "nectarine", "starfruit", "dragonfruit", "durian", "raspberry", "huckleberry", "muskmelon", "tamarillo"]

let currentAnswer = randomWords[Math.floor(Math.random() * randomWords.length)];

let currentAnswerArray = currentAnswer.split("");

// starting with blank areas ( _ ) for each letter based on the word.length 
// const startButton = document.querySelector("#start");
const wordSpot = document.querySelector("#randomword");

let blank = [];
for (let i = 0; i < currentAnswerArray.length; i++) {
  blank.push("_");
}
wordSpot.innerHTML = blank.join(" ");

let matchedALetter = false;
const Images = ["Images/Hangman.png", "Images/-1.png", "Images/-2.png", "Images/-3.png", "Images/-4.png", "Images/-5.png", "Images/-6.png"]
let picture = document.querySelector("#test");
let container = document.querySelector(".containers")
submitButton.addEventListener("click", (e) => {
  console.log(currentAnswer)
  console.log("submit button pressed");
  for (let i = 0; i < currentAnswerArray.length; i++) {
    if (currentAnswerArray[i] == answerInputBox.value) {
      blank[i] = currentAnswerArray[i];
      counter++;
      guesses++;
      console.log("answer is correct");
      wordSpot.innerHTML = blank;
      matchedALetter = true
    }
  }

  if ((!matchedALetter) && (answerInputBox.value != "")) {
    lives--;
    showLives.innerHTML = "You have " + lives + " lives!";
    picture.src = Images[6]
  }

  if (blank.join("") == currentAnswer) {
    showLives.innerHTML = "You win!";
    container.innerHTML = `<h1 class="title">Hooray! You have won!The correct answer was indeed ${currentAnswer}! Yummy!</h1> <img src="Images/win.jpeg">`
  }

  // Losing Lives
  if (lives == 6) {
    picture.src = Images[0]
  }

  else if (lives == 5) {
    picture.src = Images[1]
  }
  else if (lives == 4) {
    picture.src = Images[2]
  }
  else if (lives == 3) {
    picture.src = Images[3]
  }
  else if (lives == 2) {
    picture.src = Images[4]
  }
  else if (lives == 1) {
    picture.src = Images[5]
  }
  else if (lives == 0) {  //Game Over
    picture.src = Images[6];
    container.innerHTML = `<h1 class="title">Game Over! You have lost! The correct answer was ${currentAnswer}</h1> <img src="Images/-6.png">`

  }

  matchedALetter = false;
  answerInputBox.value = "";
})
// Hint
const hintButton = document.querySelector("#hint");
const hint1 = document.querySelector("#hint1");
hintButton.addEventListener("click", (e) => {
  console.log("Hint Button Pressed")
  hint1.innerHTML = "The first letter of the secret word is " + currentAnswer.charAt(0) + " and the last letter of the secret word is " + currentAnswer.charAt(currentAnswer.length - 1);
})
