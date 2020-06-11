const styles = () => {
  const style = document.createElement('style');
  style.id = 'hint-styles';
  style.type = 'text/css';
  style.textContent = `
    /* Formula hint styles */
    .active-item:hover span {
      color: #fff;
    }
  `;
  document.head.appendChild(style);
};

const formula = (size) => {
  styles();
  const formula = document.querySelector('#formula');
  const formulaItem = formula.querySelectorAll('.formula-item');

  if (size > 1024) {
    const activeFormula = document.createElement('style');
    activeFormula.textContent = `
    .active-formula::before {
      z-index: -1;
      transform: rotate(180deg);
    }`;

    formula.append(activeFormula);

    formulaItem.forEach(element => {
      const formulaItemIcon = element.querySelector('.formula-item__icon');
      const formulaItemPopup = element.querySelector('.formula-item-popup');

      formulaItemIcon.addEventListener('mouseover', (evt) => {
        formulaItemIcon.classList.add('active-item');
        if (!evt.target.matches('.formula-item__icon')) {
          if (formulaItemPopup.getBoundingClientRect().top > 0) {
            formulaItemPopup.style.cssText = "opacity: 1; visibility: visible; transition: opacity 0.3s;";
          } else {
            element.style.zIndex = "1";
            formulaItemPopup.style.cssText = "opacity: 1; visibility: visible; transition: opacity 0.3s; top: 100px; padding: 40px 40px 0;";
            formulaItemPopup.classList.add('active-formula');
          }
        }     
      });

      formulaItemIcon.addEventListener('mouseout', (evt) => {      
        if (!evt.target.matches('.formula-item__icon')) {
          formulaItemIcon.classList.remove('active-item');
          element.style.zIndex = "0";
          formulaItemPopup.style.cssText = "opacity: 0.1; visibility: hidden; transition: opacity 0.3s;";  
          formulaItemPopup.classList.remove('active-formula');
        }   
      });
    });
  } else {
    const formulaSlider = formula.querySelector('.formula-slider');
    const formulaSliderSlide = formulaSlider.querySelectorAll('.formula-slider__slide');
    const arrowRight = formula.querySelector('#formula-arrow_right');
    const arrowLeft = formula.querySelector('#formula-arrow_left');
    const formulaSliderWrap = formula.querySelector('.formula-slider-wrap');    
    formulaSliderWrap.style.overflow = "hidden";


    let sixePx = 33;
    if (size < 576) {
      sixePx = 100;

    } else {
      let first = formulaSliderSlide[0].cloneNode(true);
      let last = formulaSliderSlide[5].cloneNode(true);
      formulaSlider.appendChild(first);
      formulaSlider.prepend(last);
    }

    formulaSlider.style.cssText = `
      display: flex;
      align-items: flex-start;
      will-change: transform;
    `;
    formulaItem.forEach(element => {
      element.style.cssText = `
        flex: 0 0 ${sixePx}%;
      `;
      
    });

    const render = (count) => {
      formulaSliderSlide.forEach((element, i) => {
        element.classList.remove('active-item');
        if (i === count) {
          element.classList.add('active-item');
          
        }
      });
    };

    let count = 0;
    let slide = 0;
    let pos = sixePx;
    formulaSlider.style.transform = `translateX(${slide * pos}%)`;
    render(count);

    arrowRight.addEventListener('click', () => {
      count++;
      slide--;
      if (count > 5) {
        count = 0;
        slide = 0;
      }
      formulaSlider.style.transform = `translateX(${slide * pos}%)`;
      render(count);

    });
    arrowLeft.addEventListener('click', () => {
      count--;
      slide++;
      if (count < 0) {
        count = 5;
        slide = -5;
      }
      formulaSlider.style.transform = `translateX(${slide * pos}%)`;
      render(count);
    });     
  }
  
};

export default formula;