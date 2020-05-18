const smoothScroll = () => {
  
  const menuList = document.querySelectorAll('.popup-menu-nav__item>a[href*="#"]'),
        moveUp = document.querySelector('.button-footer>a');
  
  // Navigation scroll
  menuList.forEach(element => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      const gotId = element.getAttribute('href');      
      document.querySelector('' + gotId).scrollIntoView({behavior: 'smooth', block: 'start'});
    });
  });

  // Arrow scroll up to the top
  moveUp.addEventListener('click', (event) => {
    let target = event.target;
    event.preventDefault();
    const gotId = target.getAttribute('href');
    document.querySelector('' + gotId).scrollIntoView({ behavior: 'smooth', block: 'start'});
  });

};

export default smoothScroll;