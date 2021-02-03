function myFunction() {
  var x = document.getElementById("active");
  let y = document.querySelector("button");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.textContent = "👆🏼";
  } else {
    x.style.display = "none";
    y.textContent = "👇🏼";
  }
}
