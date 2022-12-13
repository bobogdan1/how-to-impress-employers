const minElement = document.querySelector(".min");
const secElement = document.querySelector(".sec");
const hourElement = document.querySelector("hour");

setinterval(() => {
  const date = new Date();
  const secDeg = (date.getSeconds() / 60) * 360 - 90;
  const minDeg = (date.getMinutes() / 60) * 360 - 90;
  const hourDeg = (date.getHours() / 12) * 360 - 90;
  secElement.style.transform = `rotate(${secDeg}deg)`;
  minElement.style.transform = `rotate(${minDeg}deg)`;
  hourElement.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);
