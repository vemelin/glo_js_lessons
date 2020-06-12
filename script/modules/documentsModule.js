const documentsModule = (windowWidth) => {
  const transparency = document.querySelector('#transparency');
  const transparencyItem = transparency.querySelectorAll('.transparency-item');
  const transparencyItemCount = transparencyItem.length;
  const arrowRight = transparency.querySelector('#transparency-arrow_right');
  const arrowLeft = transparency.querySelector('#transparency-arrow_left');

  let sliderCount = 0;

  const resize = () => {
    if (windowWidth <= 1090) {
      transparencyItem.forEach(el => {
        el.style.display = 'none';
      });
      transparencyItem[sliderCount].style.display = 'flex';
    } else {
      transparencyItem.forEach(el => {
        el.style.display = 'flex';
      });
    }
  };

  resize();

  const render = () => {
    transparencyItem.forEach(el => {
      el.style.display = 'none';
    });
    transparencyItem[sliderCount].style.display = 'flex';
  };

  arrowRight.addEventListener(`click`, (evt) => {
    ++sliderCount;
    if (transparencyItemCount <= sliderCount) {
      sliderCount = 0;3
    }
    render();
  });

  arrowLeft.addEventListener(`click`, (evt) => {
    --sliderCount;
    if (sliderCount < 0 ) {
      sliderCount = transparencyItemCount - 1;
    }
    render();
  });
  
  document.querySelector('.popup-transparency').addEventListener('click', e => {
    if(e.target.classList.contains('popup-transparency')){
      e.target.style.cssText = `visibility: none;`;
    }
  });

}; 
export default documentsModule;