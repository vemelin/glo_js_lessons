const howWeWork = () => {
  const scheme = document.querySelector('#scheme'),
    schemeSlide = scheme.querySelectorAll('.scheme-nav__item'),
    schemeImage = scheme.querySelectorAll('.scheme-slider__slide.fade-tab'),
    schemeDescription = scheme.querySelectorAll('.scheme-description-block');

let activeTab = 0;

  schemeSlide.forEach((element, i) => {
    element.classList.remove('active');
    element.addEventListener('click', () => {
      activeTab = i;
      tabs();
      element.classList.add('active');
    });
  });

  const tabs = () => {
    schemeSlide.forEach(element => {
      element.classList.remove('active');
    });
    schemeImage.forEach(element => {
      element.style.display = 'none';
    });
    schemeDescription.forEach(element => {
      element.classList.remove('visible-content-block');
    });
    schemeSlide[activeTab].classList.add('active');
    schemeImage[activeTab].style.display = 'flex';
    schemeDescription[activeTab].classList.add('visible-content-block');
  };

  tabs();
}; 
export default howWeWork;