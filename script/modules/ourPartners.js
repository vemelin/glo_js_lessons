class ourPartners {
  constructor(param){
    this.id = document.querySelector('#partners');
    this.container = this.id.querySelector('.partners-slider');
    this.slides = this.id.querySelectorAll('.partners-slider__slide');
    this.arrowLeft = this.id.querySelector('#partners-arrow_left');
    this.arrowRight = this.id.querySelector('#partners-arrow_right');
    this.slideActive = 0;
    this.slidesCountAll = this.slides.length;
    this.slideWidth = this.slides[0].offsetWidth;
    this.resizeWidth = window.innerWidth;

    this.countPageSlide = '';
  }

  start () {
    this.resize();    
    this.addStyle();
    this.evenrListener();
    this.slideWidth = this.slides[0].offsetWidth;
    
  }

  evenrListener() {
    this.arrowRight.addEventListener(`click`, () => {
      ++this.slideActive;      
      if (this.slideActive > (this.slidesCountAll - this.countPageSlide)) {
        this.slideActive = 0;
      }
    
      this.render();
    });
    
    this.arrowLeft.addEventListener(`click`, () => {
      --this.slideActive;
      
      if (this.slideActive < 0 ) {
        this.slideActive = this.slidesCountAll - this.countPageSlide;
      }

      this.render();
    });
  }

  resize() {
    this.resizeWidth = window.innerWidth;
    if (this.resizeWidth > 575) {
      this.countPageSlide = 3;
    } else {
      this.countPageSlide = 1;
    }
    this.addStyle();

    window.addEventListener(`resize`, () => {
      this.resizeWidth = window.innerWidth;
      if (this.resizeWidth > 575) {
        this.countPageSlide = 3;
      } else {
        this.countPageSlide = 1;
      }
      this.addStyle();
    });
  }

  render() {
    this.container.style.cssText = `
      transform: translateX(-${this.slideActive * this.slideWidth}px);
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
    `;
  }

  addStyle() {
    this.id.querySelector('.wrapper').style.overflow = 'hidden';
    this.container.style.cssText = `
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    `;   

    this.slides.forEach(el => {
      el.style.cssText = `
      min-width: ${100 / this.countPageSlide}%;
      `;
    });
  }
}
export default ourPartners;