const button = document.getElementById("startstop");
const mySpan = document.getElementById("counter");
let contatore;
if (sessionStorage.getItem("counter")) {
  contatore = sessionStorage.getItem("counter");
} else {
  contatore = 0;
}
let interval = null;

mySpan.innerText = contatore;

button.addEventListener("click", function () {
  button.classList.toggle("red");
  if (interval) {
    clearInterval(interval);
    interval = null;
    button.innerText = "Start";
  } else {
    interval = setInterval(() => {
      contatore++;
      sessionStorage.setItem("counter", contatore);
      mySpan.innerText = contatore;
    }, 1000);
    button.innerText = "Stop";
  }
});
