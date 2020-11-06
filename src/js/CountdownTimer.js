
export default class CountdownTimer {
   constructor(selector, targetDate){
    this.selector = selector;
    this.targetDate = targetDate;
  }

  findSelector() {
    const selectorTimer1 = document.querySelector(this.selector);
    return selectorTimer1
  }
}




