let userScore = 0;
let compScore = 0;
let count = 0;
let inGame = true;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const nextturn_p = document.querySelector(".result p");
const topleft_div = document.getElementById("top-left");
const toptop_div = document.getElementById("top-top");
const topright_div = document.getElementById("top-right");
const middleleft_div = document.getElementById("middle-left");
const middlemiddle_div = document.getElementById("middle-middle");
const middleright_div = document.getElementById("middle-right");
const bottomleft_div = document.getElementById("bottom-left");
const bottombottom_div = document.getElementById("bottom-bottom");
const bottomright_div = document.getElementById("bottom-right");
const button = document.querySelector(".button button");

function getComputerChoice() {
  const choices = ["tl", "tt", "tr", "ml", "mm", "mr", "bl", "bb", "br"];
  return choices[Math.floor(Math.random() * 9)];
}

function game(userChoice) {
  if (inGame === true && hasMarker(userChoice) === false) {
    placeMarker(userChoice, "X");
    if (win("X") === true) {
      nextturn_p.innerHTML = "Congratulations, you won!";
      userScore++;
      userScore_span.innerHTML = userScore;
      computerScore_span.innerHTML = compScore;
      inGame = false;
      return;
    }
    let computerChoice;
    while (hasMarker(computerChoice) === true && count < 4)
      computerChoice = getComputerChoice();
    count++;
    placeMarker(computerChoice, "O");
    if (win("O") === true) {
      nextturn_p.innerHTML = "Sorry, you lost.";
      compScore++;
      userScore_span.innerHTML = userScore;
      computerScore_span.innerHTML = compScore;
      inGame = false;
      return;
    }
    if (tie() === true) {
      nextturn_p.innerHTML = "It's a tie.";
      inGame = false;
      return;
    }
  }
}

function win(mark) {
  if (
    topleft_div.innerHTML === mark &&
    toptop_div.innerHTML === mark &&
    topright_div.innerHTML === mark
  )
    return true;
  if (
    middleleft_div.innerHTML === mark &&
    middlemiddle_div.innerHTML === mark &&
    middleright_div.innerHTML === mark
  )
    return true;
  if (
    bottomleft_div.innerHTML === mark &&
    bottombottom_div.innerHTML === mark &&
    bottomright_div.innerHTML === mark
  )
    return true;
  if (
    topleft_div.innerHTML === mark &&
    middleleft_div.innerHTML === mark &&
    bottomleft_div.innerHTML === mark
  )
    return true;
  if (
    toptop_div.innerHTML === mark &&
    middlemiddle_div.innerHTML === mark &&
    bottombottom_div.innerHTML === mark
  )
    return true;
  if (
    topright_div.innerHTML === mark &&
    middleright_div.innerHTML === mark &&
    bottomright_div.innerHTML === mark
  )
    return true;
  if (
    topleft_div.innerHTML === mark &&
    middlemiddle_div.innerHTML === mark &&
    bottomright_div.innerHTML === mark
  )
    return true;
  if (
    topright_div.innerHTML === mark &&
    middlemiddle_div.innerHTML === mark &&
    bottomleft_div.innerHTML === mark
  )
    return true;
  return false;
}

function tie() {
  if (
    topleft_div.innerHTML !== "" &&
    toptop_div.innerHTML !== "" &&
    topright_div.innerHTML !== "" &&
    middleleft_div.innerHTML !== "" &&
    middlemiddle_div.innerHTML !== "" &&
    middleright_div.innerHTML !== "" &&
    bottomleft_div.innerHTML !== "" &&
    bottombottom_div.innerHTML !== "" &&
    bottomright_div.innerHTML !== ""
  )
    return true;
  return false;
}

function hasMarker(location) {
  if (location === "tl" && topleft_div.innerHTML === "") return false;
  if (location === "tt" && toptop_div.innerHTML === "") return false;
  if (location === "tr" && topright_div.innerHTML === "") return false;
  if (location === "ml" && middleleft_div.innerHTML === "") return false;
  if (location === "mm" && middlemiddle_div.innerHTML === "") return false;
  if (location === "mr" && middleright_div.innerHTML === "") return false;
  if (location === "bl" && bottomleft_div.innerHTML === "") return false;
  if (location === "bb" && bottombottom_div.innerHTML === "") return false;
  if (location === "br" && bottomright_div.innerHTML === "") return false;
  return true;
}

function placeMarker(location, mark) {
  if (location === "tl") topleft_div.innerHTML = mark;
  else if (location === "tt") toptop_div.innerHTML = mark;
  else if (location === "tr") topright_div.innerHTML = mark;
  else if (location === "ml") middleleft_div.innerHTML = mark;
  else if (location === "mm") middlemiddle_div.innerHTML = mark;
  else if (location === "mr") middleright_div.innerHTML = mark;
  else if (location === "bl") bottomleft_div.innerHTML = mark;
  else if (location === "bb") bottombottom_div.innerHTML = mark;
  else if (location === "br") bottomright_div.innerHTML = mark;
  else if (location === "all") {
    topleft_div.innerHTML = mark;
    toptop_div.innerHTML = mark;
    topright_div.innerHTML = mark;
    middleleft_div.innerHTML = mark;
    middlemiddle_div.innerHTML = mark;
    middleright_div.innerHTML = mark;
    bottomleft_div.innerHTML = mark;
    bottombottom_div.innerHTML = mark;
    bottomright_div.innerHTML = mark;
  }
}

function newGame() {
  count = 0;
  placeMarker("all", "");
  nextturn_p.innerHTML = "Your turn, place an X.";
  inGame = true;
}

function main() {
  topleft_div.addEventListener("click", () => game("tl"));
  toptop_div.addEventListener("click", () => game("tt"));
  topright_div.addEventListener("click", () => game("tr"));
  middleleft_div.addEventListener("click", () => game("ml"));
  middlemiddle_div.addEventListener("click", () => game("mm"));
  middleright_div.addEventListener("click", () => game("mr"));
  bottomleft_div.addEventListener("click", () => game("bl"));
  bottombottom_div.addEventListener("click", () => game("bb"));
  bottomright_div.addEventListener("click", () => game("br"));
  button.addEventListener("click", () => newGame());
}

main();
