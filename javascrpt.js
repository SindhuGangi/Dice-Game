var createcontent = document.querySelector(".container.playgame");
var startGame = document.querySelector(".container");
var main1 = document.querySelector(".container3");
var main2 = document.querySelector(".container3.container4");
main2.style.display = "none";
createcontent.style.visibility = "hidden";
var warning = document.querySelector("p.caption1.caption2");
var whowon = document.querySelector(".caption1");
warning.style.visibility = "hidden";
main1.style.visibility = "visible";
main2.style.visibility = "hidden";
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
    createcontent.style.visibility = "visible";
    warning.style.visibility = "hidden";

  }

}
function imgChange() {
  main1.style.visibility = "hidden";
  main2.style.visibility = "visible";
  main2.style.display = "block";
  main2.style.position = "relative";

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var num = document.querySelector(".players img");
  var num1 = document.querySelectorAll(".players img")[1];

  num.setAttribute("alt", randomNumber1.toString());
  num.setAttribute("src", `img/Dice-${randomNumber1}.png`);
  num1.setAttribute("alt", randomNumber2.toString());
  num1.setAttribute("src", `img/Dice-${randomNumber2}.png`);
  console.log(Number(num.getAttribute('alt')));
  console.log(Number(num1.getAttribute('alt')));
  if (Number(num.getAttribute("alt")) > Number(num1.getAttribute("alt"))) {
    whowon.innerHTML = "Player 1 Won!";

  } else if (Number(num.getAttribute("alt")) < Number(num1.getAttribute("alt"))) {
    whowon.innerHTML = "Player 2 Won!";
  } else if (Number(num.getAttribute("alt")) === Number(num1.getAttribute("alt"))) {
    whowon.innerHTML = "It's A Draw!";
  }


}





