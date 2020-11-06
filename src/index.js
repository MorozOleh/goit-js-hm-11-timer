import './styles.css';
import CountdownTimer from './js/CountdownTimer.js'
import targetTime from './js/targetTime.js' 
import currentTime from './js/currentTime.js'
import distributionOfTime from './js/distributionOfTime.js'
import countDownTemplate from './templates/countdown.hbs';


let countdownValue = new CountdownTimer('#timer-1', targetTime() );
if (targetTime() > currentTime()) {
    let interval = setInterval(() => {
      
      let timeDifferent = targetTime() - currentTime();
      
      if (timeDifferent < 0) {
        clearInterval(interval);
      }
      
      let value = distributionOfTime(timeDifferent);
      //generate new markUp;
      countdownValue.findSelector()
      .innerHTML = countDownTemplate(value)
  }, 1000
  )
}