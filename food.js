console.log("script running");

// Fix these querySelectors so that they each select the correct element.
const starbucksTile = document.querySelector("#Starbucks");
const zaxbysTile = document.querySelector("#Zaxbys");
const popeyesTile = document.querySelector("#Popeyes");
const wendysTile = document.querySelector("#Wendys");
const whataburgerTile = document.querySelector("#Whataburger");
const tacobellTile = document.querySelector("#TacoBell");
const biscuitvilleTile = document.querySelector("#Biscuitville");
const arbysTile = document.querySelector("#Arbys");
const dairyqueenTile = document.querySelector("#DairyQueen");
const culversTile= document.querySelector("#Culvers");
const subwayTile = document.querySelector("#Subway");
const mcdonaldsTile = document.querySelector("#McDonalds");

console.log(starbucksTile);
console.log(zaxbysTile);
console.log(popeyesTile);
console.log(wendysTile);
console.log(whataburgerTile);
console.log(tacobellTile);
console.log(biscuitvilleTile);
console.log(arbysTile);
console.log(dairyqueenTile);
console.log(culversTile);
console.log(subwayTile);
console.log(mcdonaldsTile);


// Add the id of the input field so we can access it!
const inputField = document.querySelector("#guess");
 
inputField.addEventListener("change", e => {
console.log("typed an answer");
let answer = inputField.value;
console.log(answer);

if (answer.toLowerCase() == "starbucks") {
  starbucksTile.classList.remove("hidden");
}
if (answer.toLowerCase() == "zaxbys") {
  zaxbysTile.classList.remove("hidden");
}
if (answer.toLowerCase() == "popeyes") {
  popeyesTile.classList.remove("hidden");
}
if (answer.toLowerCase() == "wendys") {
  wendysTile.classList.remove("hidden");
}
if (answer.toLowerCase() == "whataburger") {
  whataburgerTile.classList.remove("hidden");
}
if (answer.toLowerCase() == "tacobell") {
  tacobellTile.classList.remove("hidden");
}
if (answer.toLowerCase() == "biscuitville") {
  biscuitvilleTile.classList.remove("hidden");
}
if (answer.toLowerCase() == "arbys") {
  arbysTile.classList.remove("hidden");
}
if (answer.toLowerCase() == "dairyqueen") {
  dairyqueenTile.classList.remove("hidden");
}
if (answer.toLowerCase() == "culvers") {
  culversTile.classList.remove("hidden");
}
if (answer.toLowerCase() == "subway") {
  subwayTile.classList.remove("hidden");
}
if (answer.toLowerCase() == "mcdonalds") {
  mcdonaldsTile.classList.remove("hidden");
}
})

