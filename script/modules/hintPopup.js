const problems = (size) => {
  
  const problems = document.querySelector('#problems');
  const problemsItem = problems.querySelectorAll('.problems-item:not(.problems-slider__slide)');
  const problemsItemmobile = problems.querySelectorAll('.problems-item');

  if (size > 1024) {
    const activeproblems = document.createElement('style');
    activeproblems.textContent = `
    .active-problems::before {
      z-index: -1;
      transform: rotate(180deg);
      
    }
    .active-problems-top::before {
      z-index: -1;
      transform: rotate(0deg);
    }`
    ;

    problems.append(activeproblems);
    problemsItem.forEach(element => {
      let problemsItemIcon = element.querySelector('.problems-item__icon');
      const problemsItemPopup = element.querySelector('.problems-item-popup');
      problemsItemIcon.addEventListener('mouseover', (evt) => {

        problemsItemIcon.style.cssText = `
          color: white;
          background: linear-gradient(90deg, #f48922 0, #ffb015 100%) !important;
        `;
        if (!evt.target.matches('.problems-item__icon')) {
          element.style.zIndex = "1";
          if (problemsItemPopup.getBoundingClientRect().top > 0 && problemsItemPopup.getBoundingClientRect().bottom < window.innerHeight) {
            problemsItemPopup.style.cssText = "opacity: 1; visibility: visible; transition: opacity 0.3s; bottom: 86px;";
          } else if (problemsItemPopup.getBoundingClientRect().bottom > window.innerHeight) {
            problemsItemPopup.style.cssText = "opacity: 1; visibility: visible; transition: opacity 0.3s; top: -380px;";

            problemsItemPopup.classList.add('active-problems-top');

          } else {
            problemsItemPopup.style.cssText = "opacity: 1; visibility: visible; transition: opacity 0.3s; top: 100px; padding: 40px 40px 0;";
            problemsItemPopup.classList.add('active-problems');
          }
        }     
      });

      problemsItemIcon.addEventListener('mouseout', (evt) => { 
  
        if (!evt.target.matches('.problems-item__icon')) {
          problemsItemPopup.classList.remove('active-problems-top');
          problemsItemPopup.classList.remove('active-problems');
          problemsItemIcon.style.background = '';   
          element.style.zIndex = "0";
          problemsItemPopup.style.cssText = "opacity: 0.1; visibility: hidden; transition: opacity 0.3s;";  
          
        }   
      });
    });
  } else {
    const problemsSlider = problems.querySelector('.problems-slider');
    const problemsSliderSlide = problemsSlider.querySelectorAll('.problems-slider__slide');
    const arrowRight = problems.querySelector('#problems-arrow_right');
    const arrowLeft = problems.querySelector('#problems-arrow_left');
    const problemsSliderWrap = problems.querySelector('.problems-slider-wrap');    
    problemsSliderWrap.style.overflow = "hidden";

    let sixePx = 33;
    if (size < 576) {
      sixePx = 100;
      
    } else {
      let first = problemsSliderSlide[0].cloneNode(true);
      let last = problemsSliderSlide[3].cloneNode(true);
      problemsSlider.appendChild(first);
      problemsSlider.prepend(last);
      problemsSlider.querySelectorAll('.problems-slider__slide').forEach(el => el.classList.remove('active-item'));
    }

    problemsSlider.style.cssText = `
      display: flex;
      align-items: flex-start;
      will-change: transform;
    `;
    problemsItemmobile.forEach(element => {
      element.style.cssText = `
        flex: 0 0 ${sixePx}%;
      `;
      
    });

    const render = (count) => {
      problemsSliderSlide.forEach((element, i) => {
        element.style.width = "33%";
        element.classList.remove('active-item');
        if (i === count) {
          element.classList.add('active-item');
          
        }
      });
    };

    let count = 0;
    let slide = 0;
    let pos = sixePx;
    problemsSlider.style.transform = `translateX(${slide * pos}%)`;
    render(count);

    arrowRight.addEventListener('click', () => {
      count++;
      slide--;
      if (count > 3) {
        count = 0;
        slide = 0;
      }
      problemsSlider.style.transform = `translateX(${slide * pos}%)`;
      render(count);

    });
    arrowLeft.addEventListener('click', () => {
      count--;
      slide++;
      if (count < 0) {
        count = 3;
        slide = -3;
      }
      problemsSlider.style.transform = `translateX(${slide * pos}%)`;
      render(count);
    });     
  }
};

export default problems;