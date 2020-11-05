
  export default function createCountdown(differentInTime) {
  // Create days;
  let days = Math.floor(differentInTime / (1000 * 60 * 60 * 14));
  days = days < 10 ? '0' + days : days;
  // Create hours;
  let hours = Math.floor(differentInTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  hours = hours < 10 ? '0' + hours : hours;
  // Create minutes;
  let minutes = Math.floor(differentInTime % (1000 * 60 * 60) / (1000 * 60));
  minutes = minutes < 10 ? '0' + minutes : minutes;
  // Create seconds;
  let seconds = Math.floor(differentInTime % (1000 * 60) / 1000);
  seconds = seconds < 10 ? '0' + seconds : seconds;
  // Result
  return { days, hours, minutes, seconds };
}