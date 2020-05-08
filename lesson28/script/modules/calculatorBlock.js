const calculatorBlock = (price = 100) => {
  const getBlockElement = document.querySelector(".calc-block"),
    getTypeElement = document.querySelector(".calc-type"),
    getSquareElement = document.querySelector(".calc-square"),
    getDayElement = document.querySelector(".calc-day"),
    getCountElement = document.querySelector(".calc-count"),
    getTotalElement = document.getElementById("total");

  // Run number slow motion
  const runNumber = (input) => {
    let interval,
      start = 0;

    clearInterval(interval);

    if (getTypeElement.options[getTypeElement.selectedIndex] === 0) {
      clearInterval(interval);
      start = 0;
    }

    const step = 50000;
    // seconds = 1;

    // let setTime = Math.round((seconds/(input/step))/1000);
    const setTime = Math.round(input / step / 1000);

    interval = setInterval(() => {
      start += input.toString().length;
      getTotalElement.textContent = start;
      if (start >= input) {
        getTotalElement.textContent = Math.round(input);
        clearInterval(interval);
      }
    }, setTime);
  };

  // Mathematics addition
  const addition = () => {
    let amount = 0,
      dayValue = 1,
      roomValue = 1;
    const addValue = getTypeElement.options[getTypeElement.selectedIndex].value,
      addSquare = +getSquareElement.value;

    if (getCountElement.value > 1) {
      roomValue += (getCountElement.value - 1) / 10;
    }

    if (getDayElement.value && getDayElement.value < 5) {
      dayValue *= 2;
    } else if (getDayElement.value && getDayElement.value < 10) {
      dayValue *= 1.5;
    }

    if (addValue && addSquare) {
      amount = price * addValue * addSquare * roomValue * dayValue;
    }

    // getTotalElement.textContent = amount;
    runNumber(amount);
  };

  // Check event from block
  getBlockElement.addEventListener("change", (event) => {
    const target = event.target;
    if (target.matches("select") || target.matches("input")) {
      addition();
    }
  });
};

export default calculatorBlock;