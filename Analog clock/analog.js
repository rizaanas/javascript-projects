const hour = document.querySelector('.hrs');
const minute = document.querySelector('.min');
const second = document.querySelector('.sec');

setInterval(runClock, 1000); // Run the clock every second

function runClock() {
  const time = new Date(); // Get the current time
  const sec = time.getSeconds() / 60; // Convert seconds to fraction of a full rotation
  const min = (sec + time.getMinutes()) / 60; // Convert minutes + seconds to fraction of a full rotation
  const hrs = (min + time.getHours()) / 12; // Convert hours + minutes to fraction of a full rotation

  // Apply the rotation to the needles
  hour.style.setProperty('--rotation', hrs * 360); 
  minute.style.setProperty('--rotation', min * 360);
  second.style.setProperty('--rotation', sec * 360);
}

runClock(); // Run the function immediately to avoid delay

