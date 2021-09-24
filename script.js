function getSecondsSinceStartOfDay() {
  return (
    new Date().getSeconds() +
    new Date().getMinutes() * 60 +
    new Date().getHours() * 3600
  );
}
var hour = document.querySelector("#hour");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");

setInterval(function () {
  var time = getSecondsSinceStartOfDay();
  // your code here
  const secondsDegrees = (time / 60) * 360 + 90;
  seconds.style.transform = `rotate(${secondsDegrees}deg)`;
}, 1000);
