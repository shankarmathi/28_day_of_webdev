var y = Math.floor(Math.random() * 10 + 1);
var guess = 1;

document.getElementById("guesssubmit").onclick = function () {
  var x = document.getElementById("guessField").value;

  if (x == y) {
    alert("Congrats! you guessed it right 🔥😎");
  } else if (x > y) {
    guess++;
    alert("Try a smaller number");
  } else {
    alert("Try a greater number");
  }
};
