const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');


function setDate(){
  
  let now = new Date();
  let seconds = now.getSeconds();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let am_pm = "AM" ;
  
  // Checking AM/PM
  if (hours >= 12) {
    if (hours > 12) hours -= 12;
    am_pm = "PM";
  } else if (hours == 0) {
      am_pm = "AM";
  }

  // Setting up actual time
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let currentTime = hours + ":" + minutes + ":" + seconds + ":" + am_pm;

  // Seconds
  const secondsDegree = ((seconds / 60) * 360 ) + 90;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

  // Hours
  const hoursDegree = ((hours / 12)* 360) + 90;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`

  // Minutes
  const minutesDegree = ((minutes / 60 )* 360) + 90;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

  return currentTime;

}

setInterval(setDate, 1000);

const displayTime = setDate();

document.querySelector('.digital').innerHTML = displayTime;


