const testimonialsBlock = () => {
    const testimonials = document.querySelector('#reviews'),
          left = testimonials.querySelector('#reviews-arrow_left'),
          right = testimonials.querySelector('#reviews-arrow_right'),
          slide = testimonials.querySelectorAll('.reviews-slider__slide'),
          count = slide.length;
    let current = 0;
    const renderSlide = () => {
      slide.forEach(element => element.style.display = 'none');
      slide[current].style.display = 'flex';
    };
    right.addEventListener('click', () => {
      ++current;
      if (current > count - 1) { current = 0; }
      renderSlide();
    });
    left.addEventListener('click', () => {
      --current;
      if (current < 0) { current = count - 1;}
      renderSlide();
    });
}; 
export default testimonialsBlock;