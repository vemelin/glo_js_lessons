const slider = () => {
  const slide = document.querySelectorAll(".portfolio-item"),
    btn = document.querySelectorAll(".portfolio-btn"),
    slider = document.querySelector(".portfolio-content"),
    dotsParrent = document.querySelector(".portfolio-dots");

  let currentSlide = 0,
    interval,
    dot;

  // Create dot html elements
  const addDots = () => {
    for (let i = 0; i < slide.length; i++) {
      const element = document.createElement("li");
      element.classList.add("dot");
      dotsParrent.appendChild(element);
    }

    dot = document.querySelectorAll(".dot");

    dot[0].classList.add("dot-active");
    slide[0].classList.add("portfolio-item-active");
  };
  addDots();

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlay = () => {
    prevSlide(slide, currentSlide, "portfolio-item-active");
    prevSlide(dot, currentSlide, "dot-active");
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, "portfolio-item-active");
    nextSlide(dot, currentSlide, "dot-active");
  };

  const startPlay = (time = 3000) => {
    interval = setInterval(autoPlay, time);
  };

  const stopPlay = () => {
    clearInterval(interval);
  };

  slider.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target;

    if (!target.matches(".portfolio-btn, .dot")) {
      return;
    }

    prevSlide(slide, currentSlide, "portfolio-item-active");
    prevSlide(dot, currentSlide, "dot-active");

    if (target.matches("#arrow-right")) {
      currentSlide++;
    } else if (target.matches("#arrow-left")) {
      currentSlide--;
    } else if (target.matches(".dot")) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }

    nextSlide(slide, currentSlide, "portfolio-item-active");
    nextSlide(dot, currentSlide, "dot-active");
  });

  slider.addEventListener("mouseover", (event) => {
    if (
      event.target.matches(".portfolio-btn") ||
      event.target.matches(".dot")
    ) {
      stopPlay();
    }
  });

  slider.addEventListener("mouseout", (event) => {
    if (
      event.target.matches(".portfolio-btn") ||
      event.target.matches(".dot")
    ) {
      startPlay();
    }
  });

  startPlay(1500);
};
export default slider;