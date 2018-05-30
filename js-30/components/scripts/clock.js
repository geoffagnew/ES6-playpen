const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function setDate() {
  const currentTime = new Date();

  // calculate hours and move hand in the clockface
  const hours = currentTime.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

  // calculate minutes and move hand in the clockface
  const minutes = currentTime.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // calculate seconds and move hand in the clockface
  const seconds = currentTime.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);