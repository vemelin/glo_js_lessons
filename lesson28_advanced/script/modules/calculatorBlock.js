const calculatorBlock = (price = 100) => {
  const getBlock = document.querySelector(".calc-block"),
    getType = document.querySelector(".calc-type"),
    getSquare = document.querySelector(".calc-square"),
    getDay = document.querySelector(".calc-day"),
    getCount = document.querySelector(".calc-count"),
    getTotal = document.getElementById("total");

  // Slow motion
  const motion = ({timing, draw, duration}) => {
    const start = performance.now();
    requestAnimationFrame(function animate(time) {
      // Frame rate
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      // Calculation of current frame rate
      const progress = timing(timeFraction);

      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  };

  const count = () => {
    let [total, count, day] = [0, 1, 1];
    const type = getType.options[getType.selectedIndex].value,
      square = +getSquare.value;

    if (getCount.value > 1) {
        count += (getCount.value - 1) / 10;
    }
    if (getDay.value && getDay.value < 5) {
        day *= 2;
    } else if (getDay.value && getDay.value < 10) {
        day *= 1.5;
    }
    if (type && square) {
        total = price * type * square * count * day;
    }
    if (type > 0) {
      const slowMotion = () => motion({
          duration: 1000,
          timing(timeFraction) { return timeFraction; },
          draw(progress) { getTotal.textContent = Math.floor(progress * total); }
      });
      slowMotion();
    }
  };
  getBlock.addEventListener('change', event => {
    const target = event.target;
    if (target.matches('select') || target.matches('input')) {
        count();
    }
  });
};

const calculatorFormValidation = () => {
  // Calculator amount block
  const input = document.querySelectorAll('input[class*="calc-item calc"]');
  input.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/g, "");
    });
  });
};

calculatorFormValidation();

export default calculatorBlock;