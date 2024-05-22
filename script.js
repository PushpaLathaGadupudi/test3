const getRuleTab = document.querySelector(".tab");
const getGameTab = document.querySelector(".first");
const getWinTab = document.querySelector(".user-win");
const getLoseTab = document.querySelector(".user-lost");
const getDrawTab = document.querySelector(".tie-up");
const getRock = document.querySelector(".rock1");
const getPaper = document.querySelector(".paper1");
const getScissor = document.querySelector(".scissor1");
const option_U1 = document.getElementById("option-U1");
const option_P1 = document.getElementById("option-P1");
const option_U2 = document.getElementById("option-U2");
const option_P2 = document.getElementById("option-P2");
const option_U3 = document.getElementById("option-U3");
const option_P3 = document.getElementById("option-P3");
const comp_score = document.getElementById("compscore");
const user_score = document.getElementById("userscore");

if (
  localStorage.getItem("clickcount") === null &&
  localStorage.getItem("clickcount2") === null
) {
  localStorage.setItem("clickcount", 0);
  localStorage.setItem("clickcount2", 0);
}

function displayscore() {
  if (
    localStorage.clickcount === "undefined" &&
    localStorage.clickcount2 === "undefined"
  ) {
    user_score.innerHTML = 0;
    comp_score.innerHTML = 0;
  }
  user_score.innerHTML = localStorage.clickcount;
  comp_score.innerHTML = localStorage.clickcount2;
}
displayscore();
function popup() {
  getRuleTab.style.display = "block";
}
function popdown() {
  getRuleTab.style.display = "none";
}

function replay() {
  getWinTab.style.display = "none";
  getLoseTab.style.display = "none";
  getDrawTab.style.display = "none";
  getGameTab.style.display = "block";
}
function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
}

function loses(userOutput, pcOutput) {
  getLoseTab.style.display = "flex";
  getGameTab.style.display = "none";
  console.log(getLoseTab);
  if (typeof Storage !== 0) {
    if (localStorage.clickcount2) {
      localStorage.clickcount2 = Number(localStorage.clickcount2) + 1;
    } else {
      localStorage.clickcount2 = 1;
    }
    comp_score.innerHTML = localStorage.clickcount2;
  } else {
    comp_score.innerHTML = 0;
  }
  const cloneU = userOutput.cloneNode(true);
  while (option_U2.firstChild) option_U2.firstChild.remove();
  option_U2.appendChild(cloneU);
  const cloneP = pcOutput.cloneNode(true);
  while (option_P2.firstChild) option_P2.firstChild.remove();
  option_P2.appendChild(cloneP);
}

function win(userOutput, pcOutput) {
  getWinTab.style.display = "flex";
  getGameTab.style.display = "none";
  console.log(getWinTab);

  if (typeof Storage !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }

    user_score.innerHTML = localStorage.clickcount;
  } else {
    user_score.innerHTML = 0;
  }
  const cloneU = userOutput.cloneNode(true);
  while (option_U1.firstChild) option_U1.firstChild.remove();
  option_U1.appendChild(cloneU);
  const cloneP = pcOutput.cloneNode(true);
  while (option_P1.firstChild) option_P1.firstChild.remove();
  option_P1.appendChild(cloneP);
}

function draw(userOutput, pcOutput) {
  getDrawTab.style.display = "flex";
  getGameTab.style.display = "none";
  console.log(getDrawTab);

  const cloneU = userOutput.cloneNode(true);
  while (option_U3.firstChild) option_U3.firstChild.remove();
  option_U3.appendChild(cloneU);
  const cloneP = pcOutput.cloneNode(true);
  while (option_P3.firstChild) option_P3.firstChild.remove();
  option_P3.appendChild(cloneP);
}
function first(userChoice) {
  const computerChoice = getComputerChoice();
  var computerOutput = "";
  var userOutput = "";

  if (userChoice === "rock") {
    userOutput = getRock;
  } else if (userChoice === "paper") {
    userOutput = getPaper;
  } else if (userChoice === "scissor") {
    userOutput = getScissor;
  }
  console.log(userOutput);
  if (computerChoice === "rock") {
    computerOutput = getRock;
  } else if (computerChoice === "paper") {
    computerOutput = getPaper;
  } else if (computerChoice === "scissor") {
    computerOutput = getScissor;
  }

  console.log(computerOutput);

  switch (userChoice + computerChoice) {
    case "paperrock":
    case "rockscissor":
    case "scissorpaper":
      // win(userChoice, computerChoice, userOutput, computerOutput);
      win(userOutput, computerOutput);
      console.log("user wins");
      break;
    case "rockpaper":
    case "scissorrock":
    case "paperscissor":
      // loses(userChoice, computerChoice, userOutput, computerOutput);
      loses(userOutput, computerOutput);
      console.log("computer wins");
      break;
    case "rockrock":
    case "scissorscissor":
    case "paperpaper":
      draw(userOutput, computerOutput);
      console.log("draw");
      break;
  }
}
