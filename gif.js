console.log("Script running");

// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Capture the three major foci of user interaction in variables.
const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");

// Log the elements to confirm that the querySelectors worked.
console.log(submitButton);
console.log(queryField);
console.log(imageHolderDiv);

submitButton.addEventListener("click", async (e) => {
  let myKey = "STV3DEvhQp92BRiU44tpHed4HTXQi4kc";
  let topic = queryField.value;
  console.log(topic);

  const myQuery = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${topic}`;

let response = await fetch(myQuery);
let gifs = await response.json()
let index = getRandomInt(gifs.data.length)
let myImage = gifs.data[index].images.downsized.url
//Use imageholderdiv to replae the pig with the 'myImage' gif
imageHolderDiv.innerHTML += '<img src= "' + myImage + '"/>';
});