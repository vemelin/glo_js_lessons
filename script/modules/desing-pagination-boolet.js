export const desingBoolet = () => {
  const designs = document.querySelector('#designs');
  const designsBtn = designs.querySelectorAll('.designs-nav__item');
  let designsSlide = designs.querySelector('.designs-slider').children;
  designsSlide = Array.from(designsSlide);
  const designsSlideBulet = designs.querySelectorAll('.preview-block');

  const previewItemInner = designs.querySelectorAll('.preview-block__item-inner');
  let designsHeight = designs.querySelector('.designs-slider-wrap').offsetHeight;


  let slideActive = 0;
  let buletItemAvtive = 0;

  designsBtn.forEach((el, i) => {
    el.addEventListener('click', () => {
      slideActive = i;
      render();
    });
  });


  previewItemInner.forEach((el, itemBulet) => {
    el.addEventListener(`click`, () => {
      buletItemAvtive = itemBulet;
      renderBulet();
    });
  });

  const renderBulet = () => {
    
    previewItemInner.forEach((el) => {
      el.classList.remove('preview_active');
    });
    previewItemInner[buletItemAvtive].classList.add('preview_active');

    let arr = Array.from(designsSlideBulet[slideActive].children);
    
    arr.forEach((el, i) => {
      if (el.querySelector('.preview-block__item-inner').matches('.preview_active')) {
        designsHeight = designsHeight = designs.querySelector('.designs-slider-wrap').offsetHeight;
        buletItemAvtive = i;
        
        designsSlide[slideActive].style.cssText = `
        transform: translateY(-${designsHeight * i}px);
        transition: 0.3s;`;
      }
    });
    
  };

  const render = () => {
    buletItemAvtive = 0;
    designsBtn.forEach(el => {
      el.classList.remove('active');
    });
    designsBtn[slideActive].classList.add('active');

    designsSlide.forEach((el) => {
      el.style.display = 'none';
    });
    designsSlide[slideActive].style.display = 'block';

    designsSlideBulet.forEach((el) => {
      el.classList.remove('visible');
    });
    designsSlideBulet[slideActive].classList.add('visible');

    designsSlideBulet[slideActive].querySelector('.preview-block__item-inner').classList.add('preview_active');

    previewItemInner.forEach((el) => {
      el.classList.remove('preview_active');
    });
    previewItemInner[buletItemAvtive].classList.add('preview_active');
  };
};



export const desingSliders = (obj) => {
  const design = document.querySelector(obj.block);
  const designWrapper = design.querySelector(obj.wrapper);
  const designBtn = design.querySelectorAll(obj.nav);
  const designWrapperSlide = design.querySelector(obj.wrapperSlide);
  let designSlides = Array.from(designWrapperSlide.children);
  const designArrowLeft = design.querySelector(obj.arrowLeft);
  const designArrowRight = design.querySelector(obj.arrowRight);
  
  const sliderCountCurrent = design.querySelector(obj.sliderCountCurrent);
  const sliderCountTotal = design.querySelector(obj.sliderCountTotal);

  let designsHeight = designSlides[0].querySelector('img').clientHeight;

  let countAll = designSlides[0].children.length;
  let activeBtn = 0;
  let activeSlides = 0;

  let popupText = '';
  if (obj.popupText) {
    popupText = design.querySelectorAll(obj.popupText);
    
    designWrapperSlide.style.display = 'flex';
  }
  if (obj.dispFlex) {
    design.querySelector(obj.dispFlex).style.display = 'flex';
  }

  const arrowVisible = () => {    
    if (activeSlides >= countAll - 1) {

      designArrowLeft.style.display = 'flex';
      designArrowRight.style.display = 'none';
    } else if (activeSlides <= 0) {
      designArrowLeft.style.display = 'none';
      designArrowRight.style.display = 'flex';
    } else {
      designArrowLeft.style.display = 'flex';
      designArrowRight.style.display = 'flex';
    }
  };

  designBtn.forEach((el, i) => {
    el.addEventListener('click', () => {
      activeBtn = i;
      activeSlides = 0;
      render();
    });
  });

  designArrowRight.addEventListener('click', () => {
    ++activeSlides;
    if (activeSlides > countAll - 1) {
      activeSlides = countAll - 1;
      return;
    }
    render();
  });
  designArrowLeft.addEventListener('click', () => {
    --activeSlides;
    if (activeSlides < 0) {
      activeSlides = 0;
      return;
    }
    render();
  });

  const render = () => {
    arrowVisible();
    
    designSlides[activeBtn].style.cssText = `
    transform: translateY(-${0}px);
    transition: 0.3s;
  `;
    designBtn.forEach((el) => {
      el.classList.remove('active');
    });
    designBtn[activeBtn].classList.add('active');

    designSlides.forEach(el => {
      el.style.display = 'none';
    });
    designSlides[activeBtn].style.display = 'block';

    if (obj.popupText) {
      popupText.forEach(el => {
        el.classList.remove(obj.popupTextActiveClass);
      });
      popupText[activeBtn].classList.add(obj.popupTextActiveClass);
    }

    designsHeight = designSlides[activeBtn].querySelector('img').clientHeight;
    countAll = designSlides[activeBtn].children.length;
    
    designSlides[activeBtn].style.cssText = `
      transform: translateY(-${designsHeight * activeSlides}px);
      transition: 0.3s;
    `;
    
    sliderCountCurrent.textContent = activeSlides + 1;
    sliderCountTotal.textContent = countAll;
  };


  arrowVisible();
};

export const desingPopup = () => {
  const designs = document.querySelector('#designs');
  const linkPopup = designs.querySelector('.link-list-designs a');     
  const popupDesing = document.querySelector('.popup-design');
  const closrPopup = popupDesing.querySelector('.close.mobile-hide');
  const closrPopupMobile = popupDesing.querySelector('.close.tablet-hide.desktop-hide');
  linkPopup.addEventListener(`click`, (evt) => {
    evt.preventDefault();   
    popupDesing.style.visibility = 'visible';
  });
  closrPopup.addEventListener(`click`, (evt) => {  
    popupDesing.style.visibility = 'hidden';
  });
  closrPopupMobile.addEventListener(`click`, (evt) => {  
    popupDesing.style.visibility = 'hidden';
  });
}