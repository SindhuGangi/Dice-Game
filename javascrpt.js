var createcontent = document.querySelector(".container.playgame").style.visibility = "hidden";
var warning = document.querySelector("p.caption1.caption2");
warning.style.visibility = "hidden";
iswarning = false;
function checkinput() {
  var text = document.querySelector("input").value;
  var text1 = document.querySelectorAll("input")[1].value;
  if (((text.trim() === "") || (text1.trim() === ""))) {
    warning.textContent = "❌ Both fields are required.";
    warning.style.visibility = "visible";
  }

  if (!Number.isInteger(Number(text)) || !Number.isInteger(Number(text1))) {
    warning.textContent = "❌ Both inputs must be whole numbers.";
    warning.style.visibility = "visible";
  }
  else if ((Number(text) > 5 || Number(text) < 2) && (Number(text1) > 6 || Number(text1) < 1)) {
    warning.textContent = "❌ Both inputs must be  Players-2:5 and  Dices-1:6 .";
    warning.style.visibility = "visible";
  }
  else if (Number(text) > 5 || Number(text) < 2) {
    warning.textContent = "❌ Players-2:5.";
    warning.style.visibility = "visible";

  } else if (Number(text1) > 6 || Number(text1) < 1) {
    warning.textContent = "❌ Dices-1:6.";
    warning.style.visibility = "visible";
 
  }

}


