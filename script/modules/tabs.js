const tabs = (obj) => {
  const block = document.querySelector(obj.block);
  const blockWrapper = block.querySelector(obj.blockWrapper); 
  const blockSlides = block.querySelector(obj.blockSlides);
  const arrowRight = block.querySelector(obj.arrowRight);
  const arrowLeft = block.querySelector(obj.arrowLeft);
  const slidesAll = blockSlides.children.length;


  let sizeWrapper = blockWrapper.clientWidth;
  let sizeSlides = blockSlides.clientWidth;
  let activeSlide = 0;
  let count = (sizeSlides - sizeWrapper) / slidesAll;
  
  window.addEventListener(`resize`, () => {
    sizeWrapper = blockWrapper.clientWidth;
    sizeSlides = blockSlides.clientWidth;
    activeSlide = 0;
    count = (sizeSlides - sizeWrapper) / slidesAll;
    render();
  });

  
  
  arrowRight.addEventListener('click', () => {
    ++activeSlide;
    if (activeSlide > slidesAll) {
      activeSlide = slidesAll;
      return;        
    }

    render();
  });

  arrowLeft.addEventListener('click', () => {
    --activeSlide;
    if (activeSlide < 0) {
      activeSlide = 0;
      return;        
    }
    render();
  });

  const render = () => {    
    visibleArrow();  
    blockSlides.style.transform = `translateX(-${count * activeSlide}px)`;
  };

  const visibleArrow = () => {
    if (activeSlide === 0) {
      arrowLeft.style.display = 'none';
      arrowRight.style.display = 'flex';
    } else if (activeSlide >= slidesAll) {
      arrowLeft.style.display = 'flex';
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = 'flex';
      arrowLeft.style.display = 'flex';
    }
  };

  visibleArrow();
};

export default tabs;