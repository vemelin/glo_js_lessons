const repairModalContent = () => {
  console.log('Repair Modal Content');  
}; 
export default repairModalContent;

// class repairModalContent {

//   constructor() {
//     this.repairTypes = document.querySelector('#repair-types');
//     this.repairItems = this.repairTypes.querySelectorAll('.repair-types-nav__item');
//     this.repairSlideCollection = this.repairTypes.querySelector('.repair-types-slider').children;
//     this.repairSlide = Array.from(this.repairSlideCollection);
//     this.sliderCounterContentTotal = this.repairTypes.querySelector('.slider-counter-content__total');
//     this.sliderCounterContentCurrent = this.repairTypes.querySelector('.slider-counter-content__current');
//     this.arrowLeft = this.repairTypes.querySelector('#repair-types-arrow_left');
//     this.arrowRight = this.repairTypes.querySelector('#repair-types-arrow_right');
//     this.slideHeight = this.repairSlide[1].querySelector('img').height;
//     this.navArrowLeft = this.repairTypes.querySelector('#nav-arrow-repair-left_base');
//     this.navArrowRight = this.repairTypes.querySelector('#nav-arrow-repair-right_base');
//     this.navListRepair = this.repairTypes.querySelector('.nav-list-repair');
//     this.repairWidth = this.repairTypes.querySelector('.repair-types-nav').offsetWidth;
//     this.navListRepairWidth = (this.navListRepair.offsetWidth - this.repairWidth) / this.navListRepair.children.length;
//     this.base = 0;
//     this.sliderCount = 0;
//     this.slide = 0;
//   }

//   start() {
//     this.eventListener();
//     this.eventListenerSlides();
//     this.eventListenerBase();
//     this.sliderCounterContentTotal.textContent = this.repairSlide[0].children.length;
//     this.sliderCounterContentCurrent.textContent = this.slide + 1;
//   }
  
//   eventListenerBase() {
//     this.navArrowRight.addEventListener(`click`, () =>{    
//       if (this.base >= this.navListRepair.children.length) return;
//       ++this.base;
//       this.navListRepairWidth = (this.navListRepair.offsetWidth - this.repairWidth) / this.navListRepair.children.length;
//       this.navListRepair.style.transform = `translateX(-${this.navListRepairWidth * this.base}px)`;
//     });

//     this.navArrowLeft.addEventListener(`click`, () =>{
//       if (this.base <= 0) return;
//       --this.base;
//       this.navListRepairWidth = (this.navListRepair.offsetWidth - this.repairWidth) / this.navListRepair.children.length;
//       this.navListRepair.style.transform = `translateX(-${this.navListRepairWidth * this.base}px)`;
//     });
//   }

//   eventListenerSlides() {
//     this.arrowRight.addEventListener(`click`, () =>{
//       ++this.slide;
//       if (this.slide >= this.repairSlide[this.sliderCount].children.length) {
//         this.slide = 0;
        
//       }
//       this.sliderCounterContentCurrent.textContent = this.slide + 1;
//       this.repairSlide[this.sliderCount].style.transform = `translateY(-${this.slideHeight * this.slide}px)`;

//     });

//     this.arrowLeft.addEventListener(`click`, () =>{
//       --this.slide;
//       if (this.slide < 0) {
//         this.slide = this.repairSlide[this.sliderCount].children.length - 1;
//       }
//       this.sliderCounterContentCurrent.textContent = this.slide + 1;
//       this.repairSlide[this.sliderCount].style.transform = `translateY(-${this.slideHeight * this.slide}px)`;
//     });
//   }

//   eventListener() {

//       window.addEventListener(`resize`, () => {
//         this.repairWidth = this.repairTypes.querySelector('.repair-types-nav').offsetWidth;
//         this.navListRepairWidth = (this.navListRepair.offsetWidth - this.repairWidth) / this.navListRepair.children.length;
//         this.navListRepair.style.transform = `translateX(-${0}px)`;
//         this.base = 0;
//       });

//     this.repairItems.forEach((el, i) => {    
//       el.addEventListener(`click`, () =>{
//         this.base = 0;
//         this.sliderCount = 0;
//         this.slide = 0;
//         this.render();
//         el.classList.add('active');
//         this.repairSlide[i].style.display = 'block';
//         this.sliderCount = i;       
//         this.sliderCounterContentTotal.textContent = this.repairSlide[i].children.length;
//       });
//     });
//   }

//   render() {
//     this.repairItems.forEach((el, i) => {
//       el.classList.remove('active');      
//     });
//     this.repairSlide.forEach((el, i) => {
//       this.repairSlide[i].style.display = 'none';
//     });
//   }

// }

// export default repairModalContent;