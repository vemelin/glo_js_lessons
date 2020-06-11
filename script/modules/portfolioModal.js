const portfolioModal = () => {
  const portfolio = document.querySelector('#portfolio');
  const portfolioBtnDesctop = portfolio.querySelectorAll('.portfolio-slider.mobile-hide .portfolio-slider__slide-frame');
  const portfolioBtnMobile = portfolio.querySelectorAll('.portfolio-slider-mobile.tablet-hide.desktop-hide .portfolio-slider__slide-frame');

  const popupPortfolio = document.querySelector('.popup-portfolio');
  const popupPortfolioClose = popupPortfolio.querySelector('.mobile-hide');
  const popupPortfolioCloseMobile = popupPortfolio.querySelector('.close.tablet-hide.desktop-hide');

  const popupPortfolioSlide = popupPortfolio.querySelector('.popup-portfolio-slider');
  const popupPortfolioText = popupPortfolio.querySelectorAll('.popup-portfolio-text');
  const mobileSlides = popupPortfolio.querySelectorAll('.popup-portfolio-slider__slide');
  const countSlide = popupPortfolioText.length;
  let slideHeight;
  
  const textWrapper = popupPortfolio.querySelector('#popup-portfolio-counter');
  const arrowRight = popupPortfolio.querySelector('#popup_portfolio_right');
  const arrowLeft = popupPortfolio.querySelector('#popup_portfolio_left');
  let slideActive = 0;

  textWrapper.querySelector('.slider-counter-content__total').textContent = countSlide;

  const render = () => {
    slider();
    textWrapper.querySelector('.slider-counter-content__current').textContent = slideActive + 1;

    mobileSlides.forEach(el => {
      el.style.display = "none";
    });
    mobileSlides[slideActive].style.display = "flex";

  };

  arrowRight.addEventListener('click', () => {
    ++slideActive;
    if (slideActive > countSlide - 1) {
      slideActive = 0;
    }
    render();
  });
  arrowLeft.addEventListener('click', () => {
    --slideActive;
    if (slideActive < 0) {
      slideActive = countSlide - 1;
    }
    render();
  });

  portfolioBtnMobile.forEach((element, i) => { 
    element.addEventListener('click', (evt)=> {
      popupPortfolio.style.visibility = 'visible';  
      render();
    });
  });

  portfolioBtnDesctop.forEach((element, i) => { 
    element.addEventListener('click', (evt)=> {
      popupPortfolio.style.visibility = 'visible';
      slideActive = i;
      slideHeight = popupPortfolioSlide.querySelector('img').height;
      render();
      textWrapper.querySelector('.slider-counter-content__current').textContent = slideActive + 1;
      textWrapper.style.top = `${slideHeight - 100}px`;
      arrowRight.style.top = `${slideHeight / 2}px`;
      arrowLeft.style.top = `${slideHeight / 2}px`;
    });
  });
  
  popupPortfolio.addEventListener('click', e => {;
    if (e.target.classList.contains('popup-portfolio')) {
      // console.log(e.target);
      
      popupPortfolio.style.cssText = "visibility: hidden;";
    }

  })
  
  popupPortfolioCloseMobile.addEventListener(`click`, () => {
    popupPortfolio.style.cssText = "visibility: hidden;";
  });

  popupPortfolioClose.addEventListener(`click`, () => {
    popupPortfolio.style.cssText = "visibility: hidden;";
  });

  let windowWidth = window.innerWidth;

  window.addEventListener(`resize`, () => {
    windowWidth = window.innerWidth;
    mobileSlides.forEach(el => {
      el.style.display = "block";
    });
    slider();
    render();

  });

  const slider = () => {
    if (windowWidth <= 1024) {
      mobileSlides.forEach(el => {
        el.style.display = "none";
      });
      mobileSlides[slideActive].style.display = "block";
    }
    popupPortfolioText.forEach(el => {
      el.style.display = "none";
    });
    popupPortfolioText[slideActive].style.display = "block";
  };
};

export default portfolioModal;