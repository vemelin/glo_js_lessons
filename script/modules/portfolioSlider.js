const portfolioSlider = () => {
  const portfolio = document.querySelector('#portfolio');
  const arrowRight = portfolio.querySelector('#portfolio-arrow_right');
  const arrowLeft = portfolio.querySelector('#portfolio-arrow_left');
  const slides = portfolio.querySelectorAll('.portfolio-slider__slide');
  let slideWidth = slides[0].offsetWidth;
  let SlideActive = 0;
  let slideCount;
  let windowWidth = window.innerWidth;

  const mobileslide = portfolio.querySelectorAll('.portfolio-slider-mobile .portfolio-slider__slide-frame');
  const mobileSliderTotal = portfolio.querySelector('.slider-counter-content__total');
  mobileSliderTotal.textContent = mobileslide.length;
  const mobileSliderCurrent = portfolio.querySelector('.slider-counter-content__current');
  let mobileSlidActive = 0;
  mobileSliderCurrent.textContent = mobileSlidActive + 1;
  const mobileArrowRight = portfolio.querySelector('#portfolio-arrow-mobile_right');
  const mobileArrowLeft = portfolio.querySelector('#portfolio-arrow-mobile_left');

  const mobileArrowVisible = () => {
    if (mobileSlidActive <= 0) {
      mobileArrowLeft.style.display = 'none';
      mobileArrowRight.style.display = 'flex';      
    } else if (mobileSlidActive >= mobileslide.length - 1) {
      mobileArrowLeft.style.display = 'flex';
      mobileArrowRight.style.display = 'none';
    } else {
      mobileArrowRight.style.display = 'flex';
      mobileArrowLeft.style.display = 'flex';
    }
  };

  mobileArrowVisible();

  const mobileRender = () => {
    mobileslide.forEach(element => {
      element.style.display = 'none';
    });
    mobileslide[mobileSlidActive].style.display = 'flex';
    mobileSliderCurrent.textContent = mobileSlidActive + 1;
  };

  mobileRender();
  mobileArrowRight.addEventListener('click', () => {
    ++mobileSlidActive;
    mobileArrowVisible();
    if (mobileSlidActive >= mobileslide.length) {
      mobileSlidActive = mobileslide.length;
      return;
    }
    mobileRender();
  });

  mobileArrowLeft.addEventListener('click', () => {
    --mobileSlidActive;
    mobileArrowVisible();
    if (mobileSlidActive < 0) {
      mobileSlidActive = 0;
      return;
    }
    mobileRender();
  });

  const render = () => {    
    slides.forEach(element => {
      element.style.cssText = `
      position: relative;
      left: -${SlideActive * slideWidth}px;
      transition: 0.3s;
      `;
    });
  };
  render();

  const arrowVisible = () => {
    if (SlideActive <= 0) {
      arrowLeft.style.display = 'none';
      arrowRight.style.display = 'flex';
    } else if (SlideActive >= slides.length - slideCount) {
      arrowLeft.style.display = 'flex';
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = 'flex';
      arrowLeft.style.display = 'flex';
    }
  };

  const resize = () => {
    slideWidth = slides[0].offsetWidth;
    SlideActive = 0;
    mobileArrowRight.style.zIndex = '-1';
    mobileArrowLeft.style.zIndex = '-1';
    arrowRight.style.display = 'flex';
    arrowLeft.style.display = 'flex';
    if (windowWidth > 1024) {
      slideCount = 3;
      arrowVisible();
     } else if (windowWidth <= 1024 && windowWidth > 900) {
      slideCount = 2;
      arrowVisible();
     } else if (windowWidth <= 900 && windowWidth > 576) {
      slideCount = 1;
      arrowVisible();
     } else {
      mobileArrowRight.style.zIndex = '11111';
      mobileArrowLeft.style.zIndex = '11111';
      arrowRight.style.display = 'none';
      arrowLeft.style.display = 'none';
      render();
     }

  };
  resize();

  window.addEventListener(`resize`, () => {
    windowWidth = window.innerWidth;
    resize();
  });

  arrowRight.addEventListener('click', () => {
    ++SlideActive;    
    arrowVisible();
    if (SlideActive > (slides.length - slideCount)) {
      SlideActive = slides.length - slideCount;
      return;
    }
    render();
  });

  arrowLeft.addEventListener('click', () => {
    --SlideActive;
    arrowVisible();
    if (SlideActive < 0 ) {
      SlideActive = 0;

      return;
    }
    render();
  });
} ;
export default portfolioSlider;