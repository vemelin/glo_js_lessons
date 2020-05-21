class DocumentsSlider {
  constructor() {
    this.slideWrapper = document.querySelector('#transparency');
    this.slideWrapperSlide = this.slideWrapper.querySelectorAll('.transparency-item .transparency-item__img');
    this.popupTransparency = document.querySelector('.popup-transparency');
    this.popupTransparencyClose = this.popupTransparency.querySelector('.close'); 
    this.slideWrapperBig = this.popupTransparency.querySelectorAll('.popup-transparency-slider__slide');
    this.arrowRight = this.popupTransparency.querySelector('#transparency_right'); 
    this.arrowLeft = this.popupTransparency.querySelector('#transparency_left'); 
    this.slideActive = 0;
    this.slideAfterAll = 0;
    this.slideAfterActive = 1;
    this.sliderCurrent = this.popupTransparency.querySelector('.slider-counter-content__current'); 
    this.sliderTotal = this.popupTransparency.querySelector('.slider-counter-content__total');   
    this.sliderCurrent.textContent = this.slideAfterActive;
    this.sliderTotal.textContent = this.slideAfterAll;
    this.slideChildren = this.slideWrapperBig[this.slideActive].querySelectorAll('img');
  }

  start() {
    this.eventListener();
  }

  eventListener() {
    this.slideWrapperSlide.forEach((el, i) => {
      el.addEventListener('click', () => {
        this.popupTransparency.style.visibility = 'visible';
        this.slideActive = i;        
        this.render();                
      });
    });

    this.popupTransparencyClose.addEventListener('click', () => {
      this.popupTransparency.style.visibility = 'hidden';
      this.slideActive = 0;
      this.slideAfterAll = 0;
      this.slideAfterActive = 1;
    });

    this.arrowRight.addEventListener('click', () => {
      ++this.slideAfterActive;
      if (this.slideAfterActive > this.slideAfterAll) {
        this.slideAfterActive = 1;
      }
      this.renderChildren();
    });

    this.arrowLeft.addEventListener('click', () => {
      --this.slideAfterActive;
      if (this.slideAfterActive <= 0) {
        this.slideAfterActive = this.slideAfterAll;
      }
      this.renderChildren();
    });

  }
  renderChildren() {    
    this.slideChildren.forEach(el => {      
      el.style.display = 'none';
    });
    this.slideChildren[this.slideAfterActive - 1].style.display = 'block';
    this.sliderCurrent.textContent = this.slideAfterActive;
  }

  render() { 
    this.slideWrapperBig.forEach(el => {
      el.style.display = 'none';
    });
    this.slideWrapperBig[this.slideActive].style.display = 'flex';
    this.slideAfterAll = this.slideWrapperBig[this.slideActive].children.length;    
    this.sliderTotal.textContent = this.slideAfterAll;
    this.slideChildren = this.slideWrapperBig[this.slideActive].querySelectorAll('img');
  }

}
export default DocumentsSlider;