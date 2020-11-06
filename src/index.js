import './styles.css';
import CountdownTimer from './js/CountdownTimer'
import targetTime from './js/targetTime' 
import currentTime from './js/currentTime'
import createCountdown from './js/createCountdown.js'
import countDownTemplate from './templates/countdown.hbs';

let countdownValue = new CountdownTimer('#timer-1', targetTime() );

if (targetTime > currentTime) {
    let interval = setInterval(() => {
    // Real time
    //   let real = currentTime();
      
    // // Time in future;
    // let future = targetTime();
      
    // some action with time; 
    let timeDifferent = targetTime() - currentTime() ;

    if (timeDifferent < 0) {
      clearInterval(interval);
    }
    // result;
    let value = createCountdown(timeDifferent);
    //generate new markUp;
      countdownValue.findSelector()
        .innerHTML = countDownTemplate(value)
  }, 1000
  )
}