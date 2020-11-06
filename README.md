// import countDownTemplate from './templates/countdown.hbs'; // import
currentTime from './js/currentTime' // import targetTime from './js/targetTime'
// import createCountdown from './js/createCountdown.js'

const timer = document.querySelector('#timer-1'); const time =
document.querySelector('#timer-1');

// console.log(time)

const button = document.querySelector('.press-me')
button.addEventListener('click', onStartCountdown);

function onStartCountdown() { if (timer.classList.contains('active')) { return;
} timer.classList.add('active');

let interval =setInterval(() => { // Real time let real = currentTime(); // Time
in future; let future = targetTime(); // some action with time; let
differentInTime = future - real;

    if (differentInTime < 0) {
      clearInterval(interval);
    }
    // result;
    let value = createCountdown(differentInTime);
    console.log(value);
    //generate new markUp;
    timer.innerHTML = countDownTemplate(value)

}, 1000 ) }
