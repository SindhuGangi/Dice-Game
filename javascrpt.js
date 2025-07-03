var createcontent = document.querySelector(".playgame");
var startGame = document.querySelector(".container");
var main1 = document.querySelector(".container3");
var main2 = document.querySelector(".container4");
var warning = document.querySelector("p.caption1.caption2");
var whowon = document.querySelector(".caption1");
var text = document.querySelector("input").value;
var text1 = document.querySelectorAll("input")[1].value;
var playerdiv = document.querySelector(".players");
var rolldice = document.querySelectorAll("button.btn")[1];
createcontent.style.display = "none";
warning.style.visibility = "hidden";
startGame.style.visibility = "visible";
main1.style.visibility = "visible";
main2.style.display = "none";
iswarning = false;
function checkinput() {
  var text = document.querySelector("input").value;
  var text1 = document.querySelectorAll("input")[1].value;

  if (((text.trim() === "") || (text1.trim() === ""))) {
    warning.textContent = "❌ Both fields are required.";
    warning.style.visibility = "visible";
  }

  else if (!Number.isInteger(Number(text)) || !Number.isInteger(Number(text1))) {
    warning.textContent = "❌ Both inputs must be whole numbers.";
    warning.style.visibility = "visible";
  }
  else if ((Number(text) > 5 || Number(text) < 2) && (Number(text1) > 6 || Number(text1) < 1)) {
    warning.textContent = "❌ Both inputs must be  Players-2:5 and  Dices-1:6 .";
    warning.style.visibility = "visible";
  }
  else if (text > 5 || text < 2) {
    warning.textContent = "❌ Players-2:5.";
    warning.style.visibility = "visible";

  } else if (text1 > 6 || text1 < 1) {
    warning.textContent = "❌ Dices-1:6.";
    warning.style.visibility = "visible";
  } else {
    startGame.style.visibility = "hidden";
    startGame.style.display = "none";
    startGame.style.height = "0";
    createcontent.style.height = "100%";
    createcontent.style.display = "flex";

    createcontent.style.visibility = "visible";
    warning.style.visibility = "hidden";

  }

}
var whowon = document.querySelector(".caption1");
function imgChange() {
  var text = document.querySelector("input").value;
  var text1 = document.querySelectorAll("input")[1].value;

  var playerdiv = document.querySelector(".players");
  playerdiv.innerHTML = " ";
  var playerScores = [];

  for (var i = 1; i <= Number(text); i++) {
    var totalScore = 0;

    var newplayers = document.createElement("div");
    newplayers.classList.add(".player");
    const label = document.createElement("p");
    label.textContent = `Player ${i}`;
    label.classList.add("paralabel");
    newplayers.appendChild(label);
    for (var j = 1; j <= Number(text1); j++) {
      const dice = document.createElement("img");
      var random = Math.floor(Math.random() * 6) + 1;
      dice.src = `./img/Dice-${random}.png`;
      dice.alt = random.toString();
      dice.alt = "1";
      dice.classList.add("dice");
      dice.classList.add("rolling");
      setTimeout(() => {
        dice.classList.remove("rolling");
        const random = Math.floor(Math.random() * 6) + 1;
        dice.src = `./img/Dice-${random}.png`;
        dice.alt = random.toString();
      }, 500);
      newplayers.appendChild(dice);
      totalScore += random;
    }
    console.log(totalScore);
    playerScores.push(totalScore);
    playerdiv.appendChild(newplayers);
  }
  startGame.style.display = "none";
  startGame.style.height = "0";
  createcontent.style.height = "100%";
  createcontent.style.display = "flex";
  createcontent.style.justifyContent = "space-around";

  main1.style.display = "none";
  main2.style.display = "flex";
  main2.style.visibility = "visible";

  main2.style.height = "100%";

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var num = document.querySelector(".players img");
  var num1 = document.querySelectorAll(".players img")[1];

  const maxScore = Math.max(...playerScores);
  const winners = [];

  playerScores.forEach((score, index) => {
    if (score === maxScore) {
      winners.push(index + 1); // Player number is index + 1
    }
  });

  if (winners.length === 1) {
    whowon.innerHTML = `🏆 Player ${winners[0]} Won!`;
  } else {
    whowon.innerHTML = `🤝 It's a Draw between Players: ${winners.join(", ")}`;
  }
  rolldice.textContent = "Roll Once Again!"
}
function start() {
  createcontent.style.display = "none";
  startGame.style.display = "flex";
  startGame.style.visibility = "visible";
  startGame.style.height = "100%";
  main1.style.visibility = "visible";
  main1.style.display = "flex";
  main2.style.display = "none";
  warning.style.visibility = "hidden";
  document.querySelector("#noofplayer").value = "";
  document.querySelector("#noofdice").value = "";
  text1 = " ";
  text = " ";
  rolldice.textContent = "Roll Dice"
  whowon.innerHTML = "Roll Hard, Play Smart, Win Big!";
}




