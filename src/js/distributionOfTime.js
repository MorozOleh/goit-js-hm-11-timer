
  export default function distributionOfTime(timeDifferent) {
  // Create days;
  let days = Math.floor(timeDifferent / (1000 * 60 * 60 * 24));
  days = days < 10 ? '0' + days : days;
  // Create hours;
  let hours = Math.floor(timeDifferent % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  hours = hours < 10 ? '0' + hours : hours;
  // Create minutes;
  let minutes = Math.floor(timeDifferent % (1000 * 60 * 60) / (1000 * 60));
  minutes = minutes < 10 ? '0' + minutes : minutes;
  // Create seconds;
  let seconds = Math.floor(timeDifferent % (1000 * 60) / 1000);
  seconds = seconds < 10 ? '0' + seconds : seconds;
  // Result
  return { days, hours, minutes, seconds };
}