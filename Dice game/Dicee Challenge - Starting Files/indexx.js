
var randomeNumber1 = Math.floor(math.random() * 6) + 1;
var randomDiceImg = "dice" + randomeNumber1 + ".png";
var randomeImgSource = "image/" + randomDiceImg;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomeImgSource);






var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}