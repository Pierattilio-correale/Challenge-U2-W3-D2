let contatore;
if (sessionStorage.getItem("counter")) {
  contatore = sessionStorage.getItem("counter");
} else {
  contatore = 0;
}
const mySpan = document.getElementById("counter");
mySpan.innerText = contatore;

const interval = setInterval(() => {
  contatore++;
  sessionStorage.setItem("counter", contatore);
  mySpan.innerText = contatore;
}, 1000);

const button = document.getElementById("startstop");
button.addEventListener("click", function () {});
