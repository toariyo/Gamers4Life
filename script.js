// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Select the spans & divs where we'll display outputs.
const pointsSpan = document.querySelector("#points");
const scoreSpan = document.querySelector("#score");
const questionDiv = document.querySelector("#question");

// Select the buttons and input fields where users can provide inputs.
const randomButton = document.querySelector("#random");
const hardButton = document.querySelector("#hard");
const sportsButton = document.querySelector("#sports");
const submitButton = document.querySelector("#submit");
const answerInputBox = document.querySelector("#userAnswer");

// Starting variables - we'll fill replace these with the API
let currentQuestion =
  "The Japanese name for this grass-type pokemon, Fushigidane, is a pun on the phrase 'strange seed.'";
let currentAnswer = "bulbasaur";
let currentPoints = 300;
let currentScore = 0;
let currentQuestionLive = true;

// Function to update the text on the board to match our variables.
const updateBoard = () => {
  pointsSpan.innerHTML = currentPoints;
  scoreSpan.innerHTML = currentScore;
  // Update the question too.
  questionDiv.innerHTML = currentQuestion;
};

// Call the function!
updateBoard();

// Finish this function that checks the user's answer.
// 1. Call function when submit button is pressed
// 2. Update points


const checkAnswer = () => {
  console.log("You guessed:", answerInputBox.value);
  console.log("Correct answer:", currentAnswer);
  if ((answerInputBox.value.toLowerCase() == currentAnswer.toLowerCase()) && (currentQuestionLive == true)) {
    currentScore += currentPoints;
    currentQuestionLive = false;
  } else if ((answerInputBox.value.toLowerCase() != currentAnswer.toLowerCase()) && (currentQuestionLive == true)) {
    currentScore -= currentPoints;
    currentQuestionLive = false;
  }
  else if (currentQuestionLive == false) {
    currentScore = currentScore;
  }
  console.log(currentScore);
  updateBoard();
};

// Attach that function to the submit button via an event listener.
submitButton.addEventListener("click", checkAnswer);

// Write out an API call for each of the three question byttons on screen.
const getRandomQuestion = async () => {
  currentQuestionLive = true;
  const response = await fetch("https://jeopardy.wang-lu.com/api/random");
  const data = await response.json();
  console.log(data[0])
  currentQuestion = data[0].question;
  currentAnswer = data[0].answer;
  currentPoints = data[0].value;
  console.log(currentQuestion);
  console.log(currentPoints);
  console.log(currentAnswer);
  updateBoard();
}
randomButton.addEventListener("click", getRandomQuestion);

array = [1, 2, 3, 100]
0, 1, 2 
getRandomInt(2) 

// Hard question are those worth 1000 points
const getHardQuestion = async () => {
  currentQuestionLive = true;
  const response = await fetch("https://jeopardy.wang-lu.com/api/clues?value=1000");
  const data = await response.json();
  const index = getRandomInt(data.length);
  console.log(data[index])
  currentQuestion = data[index].question;
  currentAnswer = data[index].answer;
  currentPoints = data[index].value;
  updateBoard();
}
hardButton.addEventListener("click", getHardQuestion);

// Sports question are those worth 1000 points
const getSportsQuestion = async () => {
  currentQuestionLive = true;
  const response = await fetch("https://jeopardy.wang-lu.com/api/clues?category=48");
  const data = await response.json();
  const index = getRandomInt(data.length);
  console.log(data[index])
  currentQuestion = data[index].question;
  currentAnswer = data[index].answer;
  currentPoints = data[index].value;
  updateBoard();
}
sportsButton.addEventListener("click", getSportsQuestion);